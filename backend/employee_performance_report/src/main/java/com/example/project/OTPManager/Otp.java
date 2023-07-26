package com.example.project.OTPManager;

import com.example.project.mailsender.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.time.Duration;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Component
public class Otp {
    private Map<String, Instant> otpStore = new HashMap<>();
    private Random random = new SecureRandom();

    @Autowired
    private EmailService emailService;

    public Integer generateOtp(String email){
        int otp = generateRandomOTP(4);
        Duration validityPeriod = Duration.ofMinutes(5);
        Instant expiryAt = Instant.now().plus(validityPeriod);
        String key = Integer.toString(otp);
        key+=email;
        String subject = "Password Reset OTP - [Your Website Name]";
        String body = "Dear user," + "\n" +
        "We have received a request to reset your password for your account at [Your Website Name]. To ensure the security of your account, please use the following One-Time Password (OTP) to complete the password reset process: " + "\n" +
        "\n" +
        "OTP: " + otp + "\n" + "\n" +

        "Please note that this OTP is valid for a limited time only. Do not share this OTP with anyone, as it grants access to your account." + "\n" +

        "If you did not initiate this password reset request, please disregard this email. Your account remains secure, and no changes have been made." + "\n" +
                "Thank you for choosing [Your Website Name]." + "\n" + "\n" +

        "Best regards" + "\n";
        emailService.sendEmail(email, subject, body);
        otpStore.put(key, expiryAt);
        return otp;
    }

    public boolean validateOtp(String testKey){
        Instant expiryTimeStamp = otpStore.get(testKey);
        System.out.println(testKey);
        System.out.println(expiryTimeStamp);
//        for (Map.Entry<String, Instant> entry : otpStore.entrySet()) {
//            String key = entry.getKey();
//            Instant value = entry.getValue();
//            System.out.println("Key: " + key + ", Value: " + value);
//        }
        if (expiryTimeStamp != null && Instant.now().isBefore(expiryTimeStamp)) {
            // Valid OTP, mark it as used or remove it from the store
            otpStore.remove(testKey);
            return true;
        }
        return false;
    }

    private int generateRandomOTP(int otpLength) {
        int min = (int) Math.pow(10, otpLength - 1);
        int max = (int) Math.pow(10, otpLength) - 1;
        return random.nextInt(max - min + 1) + min;
    }
}

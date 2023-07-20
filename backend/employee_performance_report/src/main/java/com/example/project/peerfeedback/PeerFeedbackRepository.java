package com.example.project.peerfeedback;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Repository
public interface PeerFeedbackRepository extends JpaRepository<PeerFedback, Integer> {

    @Query("Select emp from peerFeedback emp where emp.empid = ?1")
    public List<PeerFedback> getPeerFeedbackOfAnEmployee(int id);

    @Query("Select emp from peerFeedback emp where emp.empid = ?1 and emp.peerid = ?2")
    public List<PeerFedback> getonefeedback(int empid,int peerid);

    @Modifying
    @Transactional
    @Query("Delete from peerFeedback peer where peer.empid=?1")
    public void deletefeedback(int empid);
}

//%START_TEST%
package tests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import dataAccess.DataAccess;
import domain.Bet;
import domain.Event;
import domain.Question;

import businessLogic.BLFacadeImplementation;

public class BLFacadeImplementationTest {

    @Mock
    private DataAccess dataAccess;

    private BLFacadeImplementation bl;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        bl = new BLFacadeImplementation(dataAccess);
    }

    // Tests for getEvents method
    @Test
    public void testGetEvents() {
        List<Event> events = bl.getEvents();
        verify(dataAccess, times(1)).getEvents();
        assertEquals(0, events.size());
    }

    @Test
    public void testGetEventsByKeyword() {
        List<Event> events = bl.getEventsByKeyword("Test");
        verify(dataAccess, times(1)).getEventsByKeyword("Test");
        assertEquals(0, events.size());
    }

    // Tests for getQuestions method
    @Test
    public void testGetQuestions() {
        List<Question> questions = bl.getQuestions(null);
        verify(dataAccess, times(1)).getQuestions(null);
        assertEquals(0, questions.size());
    }

    @Test
    public void testGetQuestionsByEvent() {
        Event event = new Event();
        List<Question> questions = bl.getQuestions(event);
        verify(dataAccess, times(1)).getQuestions(event);
        assertEquals(0, questions.size());
    }

    // Tests for closeEvent method
    @Test
    public void testCloseEvent() {
        Event event = new Event();
        bl.closeEvent(event);
        verify(dataAccess, times(1)).closeEvent(event);
    }

    // Tests for createQuestion method
    @Test
    public void testCreateQuestion() {
        Event event = new Event();
        Question question = new Question();
        bl.createQuestion(event, question);
        verify(dataAccess, times(1)).createQuestion(event, question);
    }

    // Tests for createBet method
    @Test
    public void testCreateBet() {
        Bet bet = new Bet();
        bl.createBet(bet);
        verify(dataAccess, times(1)).createBet(bet);
    }

    // Tests for storeEvent method
    @Test
    public void testStoreEvent() {
        Event event = new Event();
        bl.storeEvent(event);
        verify(dataAccess, times(1)).storeEvent(event);
    }

    // Tests for storeQuestion method
    @Test
    public void testStoreQuestion() {
        Question question = new Question();
        bl.storeQuestion(question);
        verify(dataAccess, times(1)).storeQuestion(question);
    }

    // Tests for storeBet method
    @Test
    public void testStoreBet() {
        Bet bet = new Bet();
        bl.storeBet(bet);
        verify(dataAccess, times(1)).storeBet(bet);
    }

    // Tests for removeEvent method
    @Test
    public void testRemoveEvent() {
        Event event = new Event();
        bl.removeEvent(event);
        verify(dataAccess, times(1)).removeEvent(event);
    }

    // Tests for removeQuestion method
    @Test
    public void testRemoveQuestion() {
        Question question = new Question();
        bl.removeQuestion(question);
        verify(dataAccess, times(1)).removeQuestion(question);
    }

    // Tests for removeBet method
    @Test
    public void testRemoveBet() {
        Bet bet = new Bet();
        bl.removeBet(bet);
        verify(dataAccess, times(1)).removeBet(bet);
    }

}

//$END_TEST%
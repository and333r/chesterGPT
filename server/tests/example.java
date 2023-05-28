import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import java.util.Date;

class BLFacadeImplementationTest {

    //Test to verify that createQuestion method returns a non-null object when valid parameters are provided
    @Test
    void createQuestion_ValidParameters_ReturnsNonNullObject() {
        //Arrange
        BLFacadeImplementation facade = new BLFacadeImplementation();
        String question = "What is the capital city of France?";
        Float betMinimum = 1.0f;
        Date eventDate = new Date();
        //Act
        Question result = facade.createQuestion(question, betMinimum, eventDate);
        //Assert
        assertNotNull(result);
    }

    //Test to verify that createQuestion method throws IllegalArgumentException when null question parameter is provided
    @Test
    void createQuestion_NullQuestionParameter_ThrowsIllegalArgumentException() {
        //Arrange
        BLFacadeImplementation facade = new BLFacadeImplementation();
        String question = null;
        Float betMinimum = 1.0f;
        Date eventDate = new Date();
        //Act and Assert
        assertThrows(IllegalArgumentException.class, () -> {
            facade.createQuestion(question, betMinimum, eventDate);
        });
    }

    //Test to verify that createQuestion method throws IllegalArgumentException when betMinimum parameter is negative
    @Test
    void createQuestion_NegativeBetMinimumParameter_ThrowsIllegalArgumentException() {
        //Arrange
        BLFacadeImplementation facade = new BLFacadeImplementation();
        String question = "What is the capital city of Italy?";
        Float betMinimum = -1.0f;
        Date eventDate = new Date();
        //Act and Assert
        assertThrows(IllegalArgumentException.class, () -> {
            facade.createQuestion(question, betMinimum, eventDate);
        });
    }

    //Test to verify that createQuestion method throws IllegalArgumentException when null eventDate parameter is provided
    @Test
    void createQuestion_NullEventDateParameter_ThrowsIllegalArgumentException() {
        //Arrange
        BLFacadeImplementation facade = new BLFacadeImplementation();
        String question = "What is the capital city of Spain?";
        Float betMinimum = 1.0f;
        Date eventDate = null;
        //Act and Assert
        assertThrows(IllegalArgumentException.class, () -> {
            facade.createQuestion(question, betMinimum, eventDate);
        });
    }

    //Test to verify that createQuestion method adds the question to the list of questions
    @Test
    void createQuestion_AddsQuestionToListOfQuestions() {
        //Arrange
        BLFacadeImplementation facade = new BLFacadeImplementation();
        String question = "What is the capital city of Portugal?";
        Float betMinimum = 1.0f;
        Date eventDate = new Date();
        //Act
        Question result = facade.createQuestion(question, betMinimum, eventDate);
        //Assert
        assertTrue(facade.getQuestions().contains(result));
    }

    //Test to verify that createQuestion method sets the id of the question
    @Test
    void createQuestion_SetsIdOfQuestion() {
        //Arrange
        BLFacadeImplementation facade = new BLFacadeImplementation();
        String question = "What is the capital city of Germany?";
        Float betMinimum = 1.0f;
        Date eventDate = new Date();
        //Act
        Question result = facade.createQuestion(question, betMinimum, eventDate);
        //Assert
        assertEquals(facade.getQuestions().indexOf(result), result.getId() - 1);
    }
}
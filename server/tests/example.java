import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

public class TestCreateQuestion {

    private BLFacadeImplementation facade;

    @Before
    public void setUp() {
        // Initialize BLFacadeImplementation
        facade = new BLFacadeImplementation();
    }

    @Test
    public void testCreateQuestionValid() {
        // Test valid question creation
        String statement = "What fruit is red?";
        List<String> options = new ArrayList<String>();
        options.add("Apple");
        options.add("Banana");
        options.add("Orange");
        boolean multiple = false;

        Question question = facade.createQuestion(statement, options, multiple);
        assertNotNull(question);
        assertEquals(statement, question.getStatement());
        assertEquals(options, question.getOptions());
        assertEquals(multiple, question.isMultiple());
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCreateQuestionInvalidStatement() {
        // Test invalid question creation with null statement
        String statement = null;
        List<String> options = new ArrayList<String>();
        options.add("Apple");
        options.add("Banana");
        options.add("Orange");
        boolean multiple = false;

        facade.createQuestion(statement, options, multiple);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCreateQuestionInvalidOptions() {
        // Test invalid question creation with empty options list
        String statement = "What fruit is red?";
        List<String> options = new ArrayList<String>();
        boolean multiple = false;

        facade.createQuestion(statement, options, multiple);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCreateQuestionInvalidOption() {
        // Test invalid question creation with null option
        String statement = "What fruit is red?";
        List<String> options = new ArrayList<String>();
        options.add("Apple");
        options.add(null);
        options.add("Orange");
        boolean multiple = false;

        facade.createQuestion(statement, options, multiple);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCreateQuestionInvalidMultiple() {
        // Test invalid question creation with multiple set to true but less than 2 options
        String statement = "What fruit is red?";
        List<String> options = new ArrayList<String>();
        options.add("Apple");
        boolean multiple = true;

        facade.createQuestion(statement, options, multiple);
    }
}
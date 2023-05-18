//START
@Test
public void testCreateQuestion() {
    // Creating a mock object of BLFacadeImplementation
    BLFacadeImplementation blFacadeImplementation = mock(BLFacadeImplementation.class);

    // Creating necessary objects for the test
    String question = "What is the capital of France?";
    ArrayList<String> optionsList = new ArrayList<String>();
    optionsList.add("Paris");
    optionsList.add("London");
    optionsList.add("Berlin");
    optionsList.add("Madrid");
    double betMinimum = 5.0;

    // Setting up the mock object
    when(blFacadeImplementation.createQuestion(question, optionsList, betMinimum)).thenReturn(true);

    // Invoking the method with the arguments
    boolean created = blFacadeImplementation.createQuestion(question, optionsList, betMinimum);

    // Verifying the results
    verify(blFacadeImplementation).createQuestion(question, optionsList, betMinimum);
    assertTrue(created);
}
//FINAL
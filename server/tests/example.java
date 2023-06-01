<pre>
<html>
  <head>
    <title>Tests for createQuestion method</title>
  </head>
  <body>
    <h1>Tests for createQuestion method</h1>
    <p>Testing the createQuestion method in the BLFacadeImplementation class.</p>
    <h2>Imports</h2>
    <pre>
import java.util.Date;
import java.util.Vector;
import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import dataAccess.DataAccess;
import domain.Event;
import domain.Question;
import exceptions.QuestionAlreadyExist;
    </pre>
    <h2>Test Cases</h2>
    <ol>
      <li>
        <p>Test case name: createQuestionWithCorrectData</p>
        <p>Objective: Ensure that a new question can be created with correct data.</p>
        <pre>
public void testCreateQuestionWithCorrectData() throws QuestionAlreadyExist {
  String question = "Will it rain tomorrow?";
  float betMinimum = 2.0f;
  List&lt;String&gt; answers = new ArrayList&lt;String&gt;();
  answers.add("Yes");
  answers.add("No");
  BLFacadeImplementation facade = new BLFacadeImplementation();
  facade.createQuestion(question, betMinimum, answers);
}</pre>
      </li>
      <li>
        <p>Test case name: createQuestionWithNullData</p>
        <p>Objective: Ensure that an exception is thrown when creating a question with null data</p>
        <pre>
public void testCreateQuestionWithNullData() {
  String question = null;
  float betMinimum = 2.0f;
  List&lt;String&gt; answers = null;
  BLFacadeImplementation facade = new BLFacadeImplementation();
  try {
    facade.createQuestion(question, betMinimum, answers);
    fail("Expected QuestionAlreadyExist exception was not thrown");
  } catch (QuestionAlreadyExist e) {
    // exception should be thrown
  }
}</pre>
      </li>
      <li>
        <p>Test case name: createQuestionWithEmptyQuestion</p>
        <p>Objective: Ensure that an exception is thrown when creating a question with an empty question</p>
        <pre>
public void testCreateQuestionWithEmptyQuestion() {
  String question = "";
  float betMinimum = 2.0f;
  List&lt;String&gt; answers = new ArrayList&lt;String&gt;();
  answers.add("Yes");
  answers.add("No");
  BLFacadeImplementation facade = new BLFacadeImplementation();
  try {
    facade.createQuestion(question, betMinimum, answers);
    fail("Expected QuestionAlreadyExist exception was not thrown");
  } catch (QuestionAlreadyExist e) {
    // exception should be thrown
  }
}</pre>
      </li>
      <li>
        <p>Test case name: createQuestionWithEmptyAnswers</p>
        <p>Objective: Ensure that an exception is thrown when creating a question with empty answers</p>
        <pre>
public void testCreateQuestionWithEmptyAnswers() {
  String question = "Will it rain tomorrow?";
  float betMinimum = 2.0f;
  List&lt;String&gt; answers = new ArrayList&lt;String&gt;();
  BLFacadeImplementation facade = new BLFacadeImplementation();
  try {
    facade.createQuestion(question, betMinimum, answers);
    fail("Expected QuestionAlreadyExist exception was not thrown");
  } catch (QuestionAlreadyExist e) {
    // exception should be thrown
  }
}</pre>
      </li>
      <li>
        <p>Test case name: createQuestionWithDuplicateAnswers</p>
        <p>Objective: Ensure that an exception is thrown when creating a question with duplicate answers</p>
        <pre>
public void testCreateQuestionWithDuplicateAnswers() {
  String question = "Will it rain tomorrow?";
  float betMinimum = 2.0f;
  List&lt;String&gt; answers = new ArrayList&lt;String&gt;();
  answers.add("Yes");
  answers.add("Yes");
  BLFacadeImplementation facade = new BLFacadeImplementation();
  try {
    facade.createQuestion(question, betMinimum, answers);
    fail("Expected QuestionAlreadyExist exception was not thrown");
  } catch (QuestionAlreadyExist e) {
    // exception should be thrown
  }
}</pre>
      </li>
    </ol>
  </body>
</html>
</pre>
class OnlineTest {
    takeTest() {
        this.login();
        this.showInstructions();
        this.solveQuestions();
        this.submit();
        this.provideFeedback();
    }

    login() {
        console.log("Login to system");
    }

    showInstructions() {
        console.log("Read instructions");
    }

    // Methods to override
    solveQuestions() {}
    provideFeedback() {}

    submit() {
        console.log("Submit answers");
    }
}

class AptitudeTest extends OnlineTest {
    solveQuestions() {
        console.log("Solve MCQs");
    }

    provideFeedback() {
        console.log("Feedback: Time-based result shown");
    }
}

class CodingTest extends OnlineTest {
    solveQuestions() {
        console.log("Write and compile code");
    }

    provideFeedback() {
        console.log("Feedback: Manual review needed");
    }
}

// Usage
const t1 = new AptitudeTest();
t1.takeTest();

console.log("-----------");

const t2 = new CodingTest();
t2.takeTest();
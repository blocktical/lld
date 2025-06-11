class AptitudeTest {
    takeTest() {
        console.log("Login to system");
        console.log("Read instructions");
        console.log("Solve MCQs");
        console.log("Submit answers");
        console.log("Feedback: Time-based result shown");
    }
}

class CodingTest {
    takeTest() {
        console.log("Login to system");
        console.log("Read instructions");
        console.log("Write and compile code");
        console.log("Submit answers");
        console.log("Feedback: Manual review needed");
    }
}

// Usage
const t1 = new AptitudeTest();
t1.takeTest();

const t2 = new CodingTest();
t2.takeTest();
class FinalKeywordDemo {

    final int MAX_MARKS = 100;

    final void display() {

        System.out.println(
            "Final method executed."
        );

        System.out.println(
            "Maximum Marks : " + MAX_MARKS
        );
    }

    final class FinalClass {

        void show() {
            System.out.println(
                "This is a final class."
            );
        }
    }

    public static void main(String[] args) {

        FinalKeywordDemo obj =
            new FinalKeywordDemo();

        obj.display();

        FinalKeywordDemo.FinalClass f =
            obj.new FinalClass();

        f.show();
    }
}
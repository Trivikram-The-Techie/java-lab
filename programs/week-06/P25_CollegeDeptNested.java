class CollegeDeptNested {

    String collegeName =
        "ABC Engineering College";

    static class Department {

        String departmentName;
        String hodName;

        Department(
            String departmentName,
            String hodName
        ) {
            this.departmentName = departmentName;
            this.hodName = hodName;
        }

        void display() {

            System.out.println(
                "Department : " + departmentName
            );

            System.out.println(
                "HOD : " + hodName
            );
        }
    }

    public static void main(String[] args) {

        CollegeDeptNested college =
            new CollegeDeptNested();

        CollegeDeptNested.Department dept =
            new CollegeDeptNested.Department(
                "AIML",
                "Dr. Kumar"
            );

        System.out.println(
            "College : " + college.collegeName
        );

        dept.display();
    }
}
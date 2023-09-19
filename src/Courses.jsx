import Course from "./Course";
function Courses({ courses, removeCourse }) {
  //console.log(courses);
  return (
    <>
      <div>
        <div>
          {" "}
          <h2>Kurslarım</h2>
        </div>
        <div className="cardDiv">
          {courses.map((course) => {
            return (
              <Course
                key={course.id}
                {...course}
                romeveOneCourse={removeCourse}
              />
            );
            //course={course}
          })}
        </div>
      </div>
    </>
  );
}

export default Courses;

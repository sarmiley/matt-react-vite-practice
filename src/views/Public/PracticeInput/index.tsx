import { useState } from "react"

export default function PracticeInput() {
  const [userPosition, setUserPosition] = useState("System Designer")
  const [userHabits, setUserHabits] = useState(["Hike"])
  const [dinner, setDinner] = useState("Pizza")

  const positions = ["Project Manager", "System Designer", "System Analyst"]
  const habits = ["Read", "Hike", "Swim"]
  const foods = ["Steak", "Sushi", "Pizza"]

  const handleRadioClick = (event: React.MouseEvent<HTMLInputElement>) => {
    setUserPosition(event.currentTarget.value)
  }

  const handleCheckBoxClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      setUserHabits([...userHabits, event.currentTarget.value])
    } else {
      setUserHabits(
        userHabits.filter((habit) => habit !== event.currentTarget.value)
      )
    }
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDinner(event.currentTarget.value)
  }

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col">
        {/* Radio 練習 */}
        <div className="h-48">
          {positions.map((position) => (
            <div className="flex-initial content-center items-center">
              <input
                id={position}
                type="radio"
                value={position}
                checked={userPosition === position}
                name="position"
                className="mx-2"
                onClick={handleRadioClick}
              />
              <label htmlFor={position}>{position}</label>
            </div>
          ))}
          <span>your position is：{userPosition}</span>
        </div>
        {/* CheckBox 練習 */}
        <div className="h-48">
          {habits.map((habit) => (
            <div className="flex-initial content-center items-center">
              <input
                id={habit}
                type="checkbox"
                value={habit}
                checked={userHabits.includes(habit)}
                name="position"
                className="mx-2"
                onClick={handleCheckBoxClick}
              />
              <label htmlFor={habit}>{habit}</label>
            </div>
          ))}
          <span>
            your habits are：
            {userHabits.map((habit, index) => {
              if (index === userHabits.length - 1) {
                return habit
              } else {
                return habit + ", "
              }
            })}
          </span>
        </div>
        {/* Select 練習 */}
        <div className="h-48">
          <div className="flex-initial content-center items-center">
            <select
              className="border-2 border-zinc-500 w-32"
              value={dinner}
              onChange={handleSelectChange}
            >
              {foods.map((food) => (
                <option value={food}>{food}</option>
              ))}
            </select>
          </div>
          <span>your dinner is：{dinner}</span>
        </div>
      </div>
    </div>
  )
}

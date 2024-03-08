import styled from "styled-components";

export default function Header({ setCount, count }) {
  return (
    <HeaderComponent>
      <div className="NotificationDiv">
        <h3>Notifications</h3>
        <span className="CountSpan">{count}</span>
      </div>

      <button onClick={() => setCount(0)} className="ReadBtn">
        Mark all as read
      </button>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 31px;

  .NotificationDiv {
    display: flex;
    align-items: center;
    column-gap: 12px;

    h3 {
      color: rgb(28, 32, 43);
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 1.88rem;

      @media screen and (max-width: 1000px) {
        font-size: 1.25rem;
      }
    }

    .CountSpan {
      border-radius: 0.38rem;
      background: rgb(10, 50, 123);
      padding: 4px 11px;
      color: rgb(255, 255, 255);
      font-size: 1rem;
      font-weight: 800;
      line-height: 1.25rem;
    }
  }

  .ReadBtn {
    background-color: transparent;
    border: none;
    color: rgb(94, 103, 120);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem;
    cursor: pointer;
    padding: 8px;

    @media screen and (max-width: 1000px) {
      font-size: 0.88rem;
      padding: 5px;
    }
  }
`;

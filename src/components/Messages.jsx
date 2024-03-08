import { useState } from "react";
import styled from "styled-components";

export default function Messages({ data, count, setCount }) {
  const [read, setIsRead] = useState(data);
  return (
    <>
      {data.map((msgItem) => {
        return (
          <MessagesComponent
            count={count}
            msgprop={msgItem}
            key={msgItem.id}
            onClick={() => {
              read[read.indexOf(msgItem)].isUnread === true && count > 0
                ? setCount(count - 1)
                : count;

              read[read.indexOf(msgItem)].isUnread = false;
              setIsRead([...read]);
            }}
          >
            <div className="userImg-MessageContent">
              <img src={msgItem.profilePic} alt="" className="userImg" />
              <div className="msg-time">
                <p className="message">
                  <span className="senderName">{msgItem.senderName}</span>
                  {msgItem.action}
                  <span className="post"> {msgItem.post} </span>
                  <span
                    className="msgDott"
                    count={count}
                    msgprop={msgItem}
                  ></span>
                </p>

                <p className="time">{msgItem.time}</p>
              </div>
            </div>

            {msgItem.id === 4 ? <p className="text">{msgItem.text}</p> : null}

            {msgItem.id === 5 ? (
              <img className="img" src={msgItem.userPicture} alt="" />
            ) : null}
          </MessagesComponent>
        );
      })}
    </>
  );
}

const MessagesComponent = styled.div`
  display: ${({ msgprop }) => msgprop.id === 5 && "flex"};
  justify-content: space-between;
  padding: 18px 32px 17px 20px;
  cursor: pointer;
  margin: 8px 0;
  border-radius: 0.5rem;
  background: ${({ msgprop, count }) =>
    msgprop.isUnread && count > 0 && "rgb(247, 250, 253)"};

  .text {
    box-sizing: border-box;
    border: 0.06rem solid rgb(221, 231, 238);
    border-radius: 0.31rem;
    background: rgb(255, 255, 255);
    padding: 17px 25px 22px 25px;
    max-width: 35.38rem;
    margin-top: 13px;
    margin-left: auto;
    color: rgb(94, 103, 120);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem;
  }

  .text:hover {
    background: rgb(229, 239, 250);
  }

  .userImg-MessageContent {
    display: flex;
    column-gap: 19px;
    .userImg {
      width: 2.81rem;
      height: 2.81rem;
    }

    .msg-time {
      .message {
        display: inline-block;
        column-gap: 7px;
        color: rgb(94, 103, 120);
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.25rem;

        @media screen and (max-width: 1000px) {
          font-size: 0.88rem;
        }

        .senderName {
          color: rgb(28, 32, 43);
          font-weight: 800;
        }
        .post {
          color: rgb(94, 103, 120);
          font-weight: 800;
        }
      }

      .time {
        margin-top: 7px;
        color: rgb(147, 156, 173);
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.25rem;

        @media screen and (max-width: 1000px) {
          font-size: 0.88rem;
        }
      }
      .msgDott {
        display: ${({ msgprop, count }) =>
          msgprop.isUnread === true && count > 0 ? "inline-block" : "none"};
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: rgb(246, 85, 82);
      }
    }
  }
  .img {
    width: 2.81rem;
    height: 2.81rem;
  }
`;

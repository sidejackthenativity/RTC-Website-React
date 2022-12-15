import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import '../index.css';
import successImage from "../assets/WPEUnquotedServicePath.png";
import Image from "../assets/blank.png";

const AnswersBank = [{
    id: "1",
    text: "Perform WinPEAS scan"
},
{
    id: "3",
    text: "Check control of service with accessch.exe"
},
{
    id: "2",
    text: "Looking for unquoted service path"
},
{
    id: "6",
    text: "Shell code name must be part of the directory path"
},
{
    id: "5",
    text: "Use msfvenom to make shellcode"
},
{
    id: "4",
    text: "Check if you can write to the directory"
},
{
    id: "7",
    text: "Upload the shell and start service"
}]

export const Wpe = () => {

    const [answers, updateAnswers] = useState(AnswersBank);
    let success = true;


    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(answers);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        for (let i = 0; i < items.length; i++) {
            if ((i+1) != parseInt(items[i].id)) {success = false;}
        }
        if (success) {Image = successImage;}
        updateAnswers(items);
        
    }

    return (
    
    <div>
        <section id="lesson">
            <div class="row">
                <div class="col">
                    <h1>Unquoted Service Path</h1>
                <p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/JCzPzNpjE7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </p>
                </div>
                <div class="col">
                    <h2>Drag and drop the following in the correct order to achieve a Privilege Escalation using the Unquoted Service Path Vuln: </h2>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="answers">
                        {(provided) => (
                            <ul className="answers" {...provided.droppableProps} ref={provided.innerRef}>
                            {answers.map(({id, text},index) => {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <p>
                                            { text }
                                        </p>
                                    </li>
                                    )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                            </ul>
                        )}

                </Droppable>
                </DragDropContext>
                </div>
            </div>
            <div class="row">
                <img alt="badge" src={Image}></img>
            </div>
        </section>
    </div>
  )
}


import { useState } from 'react'
import * as spotAPI from '../../utilities/spot-api'

export default function NewSpotForm({ user, setUser, newSpot, setNewSpot }){

    const userId = parseInt(localStorage.getItem('userId'))

    function handleChange(event) {
        setNewSpot({
            ...newSpot,
            [event.target.name]: event.target.value
        })
    }

    async function handleCreateSpot(event){
        event.preventDefault()
        // console.log(newSpot)
        try {
            const spotData = { "title": newSpot.title, "description": newSpot.description, "owner": userId}
    
            console.log(spotData)
    
            await spotAPI.createSpot(spotData)

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form>
                <h3>Add a new spot</h3>
                <label>Title</label>
                <input 
                    type="text"
                    name="title"
                    placeholder="Location of your spot (i.e. pantry, fridge, etc.)"
                    value={newSpot.title}
                    onChange={handleChange}
                />
                <label>Description</label>
                <input 
                    type="text"
                    name="description"
                    placeholder="Add any notes on this spot (i.e. on fridge door)"
                    value={newSpot.description}
                    onChange={handleChange}
                />
                <button type="submit" onClick={handleCreateSpot}>
                    Add spot
                </button>
            </form>
        </>
    );
}
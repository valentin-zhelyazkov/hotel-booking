import './addHotel.css'

const addHotel = () => {
   return (
    <section id="viewAddhotel">
        <h2>Add new hotel</h2>
        <form id="formAddhotel">
            <label htmlFor="hotel">Hotel name:</label>
            <input type="text" id="hotel" name="hotel" placeholder="Hotel name"/>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" placeholder="City"/>
            <label htmlFor="free-rooms">Free rooms:</label>
            <input type="number" id="free-rooms" name="free-rooms" placeholder="Free rooms"/>
            <label htmlFor="imgUrl">Image:</label>
            <input type="text" id="imgUrl" name="imgUrl" placeholder="https://"/>

            <input type="submit" className="create" value="Add"/>
        </form>
    </section>
   );
};

export default addHotel;

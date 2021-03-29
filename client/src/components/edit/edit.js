import './edit.css';

const Edit = () => {
    return (
        <section id="viewAddhotel">
            <h2>Edit existing hotel</h2>
            <form id="formAddhotel">
                <label htmlFor="hotel">Hotel name:</label>
                <input type="text" id="hotel" name="hotel" value="Auckland Inn"/>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" value="Auckland"/>
                <label htmlFor="free-rooms">Free rooms:</label>
                <input type="number" id="free-rooms" name="free-rooms" value="43"/>
                <label htmlFor="imgUrl">Image:</label>
                <input type="text" id="imgUrl" name="imgUrl" value="https://image.freepik.com/free-vector/flat-hotel-building-town_52683-10040.jpg"/>

                <input type="submit" className="edit" value="Add"/>
            </form>
        </section>
    );
};

export default Edit;
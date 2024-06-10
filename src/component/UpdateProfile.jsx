



const UpdateProfile = () => {
 
    return (
        <div>
            <div className="card  max-w-sm shadow-2xl bg-base-100">
      <form onSubmit='' className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="photoURL" placeholder="Photo Url" className="input input-bordered" required />
        </div>
        
       
        <div className="form-control mt-6">
          
          <input  className="btn btn-primary" type='submit' value="Update"></input>
        </div>
      </form>
      
    </div>
        </div>
    );
};

export default UpdateProfile;
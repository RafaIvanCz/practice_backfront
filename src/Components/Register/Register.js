import { useForm } from "react-hook-form";

const Register = () => {
  const urlBe = process.env.REACT_APP_URL_BE



  const { register, handleSubmit } = useForm()

  const onSubmit = async(data) => {
    const resp = await fetch(`${urlBe}users`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await resp.json()

    console.log(json)

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label for="exampleInputNombre" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="exampleInputNombre" aria-describedby="nombre" {...register("nombre")}/>
      </div>
      <div className="mb-3">
        <label for="exampleInputApellido" className="form-label">Apellido</label>
        <input type="text" className="form-control" id="exampleInputApellido" aria-describedby="apellido" {...register("apellido")}/>
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email")}/>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" {...register("password")}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Register;
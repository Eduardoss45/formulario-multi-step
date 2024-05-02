import React from "react";

const UserForm = ({ data, updateFiedlHandler }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="text"
          id="name"
          placeholder="Digite o seu nome"
          required
          value={data.name || ""}
          onChange={(e) => updateFiedlHandler("name", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu e-mail"
          required
          value={data.email || ""}
          onChange={(e) => updateFiedlHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;

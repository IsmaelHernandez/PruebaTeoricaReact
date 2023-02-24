import React from 'react'
import './question.css'

function Questions() {
  return (
    <div className='container__question'>
        <div className='item__question'>
            <h3>1. Escribe la diferencia entre una API rest y una API soap</h3>
            <p>La diferencia que hay es que soap es un protocolo web y da mensajes en formato XML y el rest es una arquitectura dependiento el status da una respuesta.</p>
        </div>
        <div className='item__question'>
            <h3>2. ¿Qué es GIT?</h3>
            <p>Git En pocas palabras, es un sistema que ayuda a tener versionado el codigo para tener un flujo de trabajo mas rapido y agil para que los dev puedan trabajar en conjunto!</p>
        </div>
        <div className='item__question'>
            <h3>3. Escribe la diferencia entre clase, objeto, array, método y función.</h3>
            <ul>
                <li>Una función es código que al llamarse ejecuta una acción.</li>
                <li>Un objeto es un entidad independiente con propiedades y tipos de datos.</li>
                <li>Un Array es una colección de datos una misma variable.</li>
                <li>Una clase es un elemento de la programación orientada a objetos que actúa como una plantilla que va a definir las características y comportamientos de un objeto.</li>
                <li>Un metodo es una función la cual es propiedad de un Objeto</li>
            </ul>
        </div>
        <div className='item__question'>
            <h3>4. Escribe los comandos para agregar y commitear una carpeta por GIT</h3>
            <p>[git add .] [git commit -m "nombre_de_commit]"</p>
        </div>
        <div className='item__question'>
            <h3>5. Escribe la diferencia entre PHP CGI, fastCGI y FPN</h3>
            <p>la diferencia es que cada intérprete para entornos de desarrollo, entornos de prueba o para pequeñas intranets se debe utilizar el que sea acorde a las necesidades del proyecto puesto que todos tienes diferentes caracteristicas para procesar la info.</p>
        </div>
        <div className='item__question'>
            <h3>6. Escribe un selector de elemento DOM con Javascript sin utilizar ninguna
            librería</h3>
            <p> let  example = document.getElementById('id_del_elemnto_'); me selecciona un elemento del dom mediante el id</p>
        </div>
        <div className='item__question'>
            <h3>7. Escribe la diferencia entre paradigma POO y paradigma funcional</h3>
            <p>El paradigma funcional cuando queremos trabajar con datos, definimos una estructura con los datos empaquetados que necesitamos, y cuando queremos modificar esos datos o trabajar con ellos, tenemos que definir funciones que reciben esos datos y asi jugar con ellos asyncronicamente y por el lado de POO es hacer que el código sea más fácil de razonar y comprender, por medio de abstraer el problema en constructos llamados clases.</p>
        </div>
        <div className='item__question'>
            <h3>8. Escribe los puntos a tener en cuenta para que no puedan realizar una
            inyección SQL tras recibir los datos por cualquier método del protocolo HTTP</h3>
            <ul>
                <li>*Parametrizar las consultas SQL.</li>
                <li>*No mostrar al usuario la información de error generada por la base de datos.</li>
                <li>*Rechazar las peticiones que no van acuerdo a la logica del negocio</li>
            </ul>
            
        </div>
        <div className='item__question'>
            <h3>9. Escribe una sentencia SQL para leer los campos id, nombre, salario y puesto
            de la tabla empleados cuyo salario sea mayor a 25000</h3>
            <p>SELECT id, nombre, salario, puesto FROM Empleados where salario >= 25000 </p>
        </div>
    </div>
  )
}

export default Questions
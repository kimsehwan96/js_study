const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  //validate request !
  if (!req.body.title){
      res.statu(400).send({
          message: "Content cant not be empty !"
      });
      return ;
  }
  //if there is title .
  const tutorial = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
  };
  //to save above object
  Tutorial.create(tutorial)
  .then(data => {
      res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error ouccred while creating object"
      });
  });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title; //quert string detect !
    let condition = title ? { title : {[Op.like]: `%${title}%` }  } : null;

    Tutorial.findAll({ where : condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error ouccred while creating object"
        })
    })
  
};

// id기반으로 데이터 하나 찾기. 
exports.findOne = (req, res) => {
  const id = req.params.id;
    //Model.findByPk <- prototype with Sequlize.Model, 이고 프로미스 객체임!
  Tutorial.findByPk(id).then(data => {
      res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message: "에러가 발생했습니다. 찾고자하는 id = " + id
      });
  });
};

//id기반으로 데이터를 업데이트 할거에요.
//req.body에 들어온 내용으로 덮어쓰기 할꺼임 !
exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
      where: { id: id} //조건절
      //예도 프로미스 객체 !
  })
  .then(num => {
      if(num == 1){
          res.send({
              message: "업데이트 성공"
          });
      } else {
          res.send({
              message :`업데이트가 불가능했습니다. 아이디는 ${id} 입니다.`
          })
      }
  }) //프라미스 객체의 catch 구문이 나와야쥬
  .catch(err => {
      res.status(500).send({
          message: "에러 발생. id = " + id
      });
  });
};

// 해당 id에 해당하는 데이터를 삭제시켜버리기!
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
      where: { id : id } //조건절
      //얘도 역시 프라미스죠
  })
  .then(num => {
      if (num == 1){
          res.send({
              message : "삭제를 성공했습니다."
          });
      } else {
          res.send({
              message : `삭제하는데 실패했어요 아이디는 ${id} 입니다.`
          });
      }
  })
  .catch(err => {
      res.status(500).send({
          message : "아이디를 찾을 수 없어요 id = " + id
      });
  });
};

// 모든 데이터를 삭제할게요.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
    })
    .then(nums => {
        res.send({ message : `${nums} 튜토리얼이 삭제되었습니다. `});
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "에러 발생했어요"
        });
    });
};

//퍼블리쉬드가 true인 데이터를 모두찾기. 조건절을 활용해야겠져?
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({
      where : { published : true }
  }).then (data => {
      res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message: 
            err.message || "에러 발생했다 이넘들아"
      });
  });
};
export const getJSON = async (req,res) => {
    res.send({
      "testInt": 0,
      "testString" : "test"
  });
} 
export const getOui = async (req,res) => {
  res.send({oui:'oui'});
} 


export const login = async (req,res) => {
  
  res.send({token:'token'})
}
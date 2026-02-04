function status(request, response) {
  response.status(200).json({ chave: "so far so good" });
}

export default status;

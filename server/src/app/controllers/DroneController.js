class DroneController {
  async handShake(req, res) {
    res.json({ message: 'Drone connected' });
  }
}

export default new DroneController();

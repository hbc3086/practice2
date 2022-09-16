const { Router } = require('express');
const AvailRenderReq = require('./model/AvailLenderReq');
const ConsultingReq = require('./model/ConsultingReq');
const availLenderService = require('./availLenderService');
const consultingService = require('./consultingService');
const router = Router();
const errorResponse = require('../../commonModel/ErrorResponse');
const logger = require('../../config/logger');

/**
 *
 * 조회 정보 등록
 *
 */
router.route('')
  .post(async function(req,res){
    try{
      logger.debug('대출기관조회 요청정보 저장 요청 : %O',req.body);
      const payload = new AvailRenderReq(req.body);
      payload.validate()
      const result = await availLenderService.lookupAvailLender(payload);
      res.send(result)
    }catch (e){
      errorResponse(res,e);
    }
  })

/**
 *
 * 상담신청
 *
 */
router.route('/:id/consulting')
  .post(async function(req, res){
    const llId = req.params.id;
    logger.debug('대출기관 상담요청 :  %s', llId);
    try{
      const payload = new ConsultingReq(llId);
      payload.validate();
      const id = await consultingService.requestConsulting(payload);
      res.send({id})
    } catch (e){
      errorResponse(res,e);
    }
  })

module.exports = router;

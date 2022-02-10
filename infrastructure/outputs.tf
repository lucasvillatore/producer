output "queue_arn" {
  value       = aws_sqs_queue.queue.arn
  description = "ARN da fila producer para o serverless"
}

output "queue_url" {
  value       = aws_sqs_queue.queue.url
  description = "URL da fila"
}
# Worker code can be anything you want. This will be displayed in logs
puts "Starting HelloWorker at #{Time.now}"
puts "Payload: #{params}"
puts "Simulating hard work for 5 seconds..."
5.times do |i|
  puts "Sleep #{i}..."
  sleep 1
end
puts "HelloWorker completed at #{Time.now}"
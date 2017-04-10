class DownloadController < ApplicationController
  def index
  end

  def resume
  	send_file Rails.root.join('private', 'Uslu.Zeynep.Resume.pdf'), :type=>"application/pdf", :x_sendfile=>true
  end
end

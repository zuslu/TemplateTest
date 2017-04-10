require 'test_helper'

class DownloadControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get download_index_url
    assert_response :success
  end

  test "should get resume" do
    get download_resume_url
    assert_response :success
  end

end

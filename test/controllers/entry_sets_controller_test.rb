require 'test_helper'

class EntrySetsControllerTest < ActionController::TestCase
  setup do
    @entry_set = entry_sets(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:entry_sets)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create entry_set" do
    assert_difference('EntrySet.count') do
      post :create, entry_set: { reps: @entry_set.reps, set_number: @entry_set.set_number, weight: @entry_set.weight }
    end

    assert_redirected_to entry_set_path(assigns(:entry_set))
  end

  test "should show entry_set" do
    get :show, id: @entry_set
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @entry_set
    assert_response :success
  end

  test "should update entry_set" do
    patch :update, id: @entry_set, entry_set: { reps: @entry_set.reps, set_number: @entry_set.set_number, weight: @entry_set.weight }
    assert_redirected_to entry_set_path(assigns(:entry_set))
  end

  test "should destroy entry_set" do
    assert_difference('EntrySet.count', -1) do
      delete :destroy, id: @entry_set
    end

    assert_redirected_to entry_sets_path
  end
end

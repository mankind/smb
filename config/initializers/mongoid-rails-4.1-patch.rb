module Mongoid
  module Relations

    # The "Grand Poobah" of information about any relation is this class. It
    # contains everything you could ever possible want to know.
    class Metadata < Hash

      private
      
      # Find the modules from a reversed list.
      #
      # @api private
      #
      # @example Find the module from the parts.
      #   metadata.find_from_parts([ "Namespace", "Module" ])
      #
      # @param [ Array<String> ] The modules.
      #
      # @return [ String ] The matching module.
      #
      # @since 3.0.0
      def find_from_parts(modules)
        modules.find do |mod|
          next nil if mod.blank?
          ActiveSupport::Inflector.constantize(mod).constants.include?(
            name.to_s.classify.to_sym
          )
        end
      end     #closes find_from_parts


    end #closes class Metatada

  end
end
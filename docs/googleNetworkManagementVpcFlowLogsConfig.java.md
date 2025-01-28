# `googleNetworkManagementVpcFlowLogsConfig` Submodule <a name="`googleNetworkManagementVpcFlowLogsConfig` Submodule" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkManagementVpcFlowLogsConfig <a name="GoogleNetworkManagementVpcFlowLogsConfig" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config google_network_management_vpc_flow_logs_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_management_vpc_flow_logs_config.GoogleNetworkManagementVpcFlowLogsConfig;

GoogleNetworkManagementVpcFlowLogsConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .vpcFlowLogsConfigId(java.lang.String)
//  .aggregationInterval(java.lang.String)
//  .description(java.lang.String)
//  .filterExpr(java.lang.String)
//  .flowSampling(java.lang.Number)
//  .id(java.lang.String)
//  .interconnectAttachment(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.lang.String)
//  .metadataFields(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .state(java.lang.String)
//  .timeouts(GoogleNetworkManagementVpcFlowLogsConfigTimeouts)
//  .vpnTunnel(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>java.lang.String</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.aggregationInterval">aggregationInterval</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.filterExpr">filterExpr</a></code> | <code>java.lang.String</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.flowSampling">flowSampling</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#id GoogleNetworkManagementVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.interconnectAttachment">interconnectAttachment</a></code> | <code>java.lang.String</code> | Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.metadataFields">metadataFields</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#project GoogleNetworkManagementVpcFlowLogsConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.vpnTunnel">vpnTunnel</a></code> | <code>java.lang.String</code> | Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#location GoogleNetworkManagementVpcFlowLogsConfig#location}

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.vpcFlowLogsConfigId"></a>

- *Type:* java.lang.String

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#vpc_flow_logs_config_id GoogleNetworkManagementVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `aggregationInterval`<sup>Optional</sup> <a name="aggregationInterval" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.aggregationInterval"></a>

- *Type:* java.lang.String

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values:  AGGREGATION_INTERVAL_UNSPECIFIED INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#aggregation_interval GoogleNetworkManagementVpcFlowLogsConfig#aggregation_interval}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#description GoogleNetworkManagementVpcFlowLogsConfig#description}

---

##### `filterExpr`<sup>Optional</sup> <a name="filterExpr" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.filterExpr"></a>

- *Type:* java.lang.String

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#filter_expr GoogleNetworkManagementVpcFlowLogsConfig#filter_expr}

---

##### `flowSampling`<sup>Optional</sup> <a name="flowSampling" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.flowSampling"></a>

- *Type:* java.lang.Number

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#flow_sampling GoogleNetworkManagementVpcFlowLogsConfig#flow_sampling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#id GoogleNetworkManagementVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnectAttachment`<sup>Optional</sup> <a name="interconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.interconnectAttachment"></a>

- *Type:* java.lang.String

Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#interconnect_attachment GoogleNetworkManagementVpcFlowLogsConfig#interconnect_attachment}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#labels GoogleNetworkManagementVpcFlowLogsConfig#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#metadata GoogleNetworkManagementVpcFlowLogsConfig#metadata}

---

##### `metadataFields`<sup>Optional</sup> <a name="metadataFields" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.metadataFields"></a>

- *Type:* java.util.List<java.lang.String>

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#metadata_fields GoogleNetworkManagementVpcFlowLogsConfig#metadata_fields}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#project GoogleNetworkManagementVpcFlowLogsConfig#project}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.   Possible

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#state GoogleNetworkManagementVpcFlowLogsConfig#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#timeouts GoogleNetworkManagementVpcFlowLogsConfig#timeouts}

---

##### `vpnTunnel`<sup>Optional</sup> <a name="vpnTunnel" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.vpnTunnel"></a>

- *Type:* java.lang.String

Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#vpn_tunnel GoogleNetworkManagementVpcFlowLogsConfig#vpn_tunnel}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetAggregationInterval">resetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetFilterExpr">resetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetFlowSampling">resetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetInterconnectAttachment">resetInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetMetadataFields">resetMetadataFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetVpnTunnel">resetVpnTunnel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkManagementVpcFlowLogsConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a>

---

##### `resetAggregationInterval` <a name="resetAggregationInterval" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetAggregationInterval"></a>

```java
public void resetAggregationInterval()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFilterExpr` <a name="resetFilterExpr" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetFilterExpr"></a>

```java
public void resetFilterExpr()
```

##### `resetFlowSampling` <a name="resetFlowSampling" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetFlowSampling"></a>

```java
public void resetFlowSampling()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetId"></a>

```java
public void resetId()
```

##### `resetInterconnectAttachment` <a name="resetInterconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetInterconnectAttachment"></a>

```java
public void resetInterconnectAttachment()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMetadataFields` <a name="resetMetadataFields" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetMetadataFields"></a>

```java
public void resetMetadataFields()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpnTunnel` <a name="resetVpnTunnel" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetVpnTunnel"></a>

```java
public void resetVpnTunnel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkManagementVpcFlowLogsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_management_vpc_flow_logs_config.GoogleNetworkManagementVpcFlowLogsConfig;

GoogleNetworkManagementVpcFlowLogsConfig.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_management_vpc_flow_logs_config.GoogleNetworkManagementVpcFlowLogsConfig;

GoogleNetworkManagementVpcFlowLogsConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_management_vpc_flow_logs_config.GoogleNetworkManagementVpcFlowLogsConfig;

GoogleNetworkManagementVpcFlowLogsConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_management_vpc_flow_logs_config.GoogleNetworkManagementVpcFlowLogsConfig;

GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetworkManagementVpcFlowLogsConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkManagementVpcFlowLogsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkManagementVpcFlowLogsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkManagementVpcFlowLogsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference">GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.aggregationIntervalInput">aggregationIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.filterExprInput">filterExprInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.flowSamplingInput">flowSamplingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.interconnectAttachmentInput">interconnectAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadataFieldsInput">metadataFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput">vpcFlowLogsConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpnTunnelInput">vpnTunnelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.filterExpr">filterExpr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.flowSampling">flowSampling</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.interconnectAttachment">interconnectAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadataFields">metadataFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpnTunnel">vpnTunnel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.timeouts"></a>

```java
public GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference">GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `aggregationIntervalInput`<sup>Optional</sup> <a name="aggregationIntervalInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.aggregationIntervalInput"></a>

```java
public java.lang.String getAggregationIntervalInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `filterExprInput`<sup>Optional</sup> <a name="filterExprInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.filterExprInput"></a>

```java
public java.lang.String getFilterExprInput();
```

- *Type:* java.lang.String

---

##### `flowSamplingInput`<sup>Optional</sup> <a name="flowSamplingInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.flowSamplingInput"></a>

```java
public java.lang.Number getFlowSamplingInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interconnectAttachmentInput`<sup>Optional</sup> <a name="interconnectAttachmentInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.interconnectAttachmentInput"></a>

```java
public java.lang.String getInterconnectAttachmentInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metadataFieldsInput`<sup>Optional</sup> <a name="metadataFieldsInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadataFieldsInput"></a>

```java
public java.util.List<java.lang.String> getMetadataFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a>

---

##### `vpcFlowLogsConfigIdInput`<sup>Optional</sup> <a name="vpcFlowLogsConfigIdInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput"></a>

```java
public java.lang.String getVpcFlowLogsConfigIdInput();
```

- *Type:* java.lang.String

---

##### `vpnTunnelInput`<sup>Optional</sup> <a name="vpnTunnelInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpnTunnelInput"></a>

```java
public java.lang.String getVpnTunnelInput();
```

- *Type:* java.lang.String

---

##### `aggregationInterval`<sup>Required</sup> <a name="aggregationInterval" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.aggregationInterval"></a>

```java
public java.lang.String getAggregationInterval();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `filterExpr`<sup>Required</sup> <a name="filterExpr" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.filterExpr"></a>

```java
public java.lang.String getFilterExpr();
```

- *Type:* java.lang.String

---

##### `flowSampling`<sup>Required</sup> <a name="flowSampling" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.flowSampling"></a>

```java
public java.lang.Number getFlowSampling();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interconnectAttachment`<sup>Required</sup> <a name="interconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.interconnectAttachment"></a>

```java
public java.lang.String getInterconnectAttachment();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `metadataFields`<sup>Required</sup> <a name="metadataFields" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadataFields"></a>

```java
public java.util.List<java.lang.String> getMetadataFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigId"></a>

```java
public java.lang.String getVpcFlowLogsConfigId();
```

- *Type:* java.lang.String

---

##### `vpnTunnel`<sup>Required</sup> <a name="vpnTunnel" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpnTunnel"></a>

```java
public java.lang.String getVpnTunnel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkManagementVpcFlowLogsConfigConfig <a name="GoogleNetworkManagementVpcFlowLogsConfigConfig" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_management_vpc_flow_logs_config.GoogleNetworkManagementVpcFlowLogsConfigConfig;

GoogleNetworkManagementVpcFlowLogsConfigConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .vpcFlowLogsConfigId(java.lang.String)
//  .aggregationInterval(java.lang.String)
//  .description(java.lang.String)
//  .filterExpr(java.lang.String)
//  .flowSampling(java.lang.Number)
//  .id(java.lang.String)
//  .interconnectAttachment(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.lang.String)
//  .metadataFields(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .state(java.lang.String)
//  .timeouts(GoogleNetworkManagementVpcFlowLogsConfigTimeouts)
//  .vpnTunnel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>java.lang.String</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.filterExpr">filterExpr</a></code> | <code>java.lang.String</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.flowSampling">flowSampling</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#id GoogleNetworkManagementVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.interconnectAttachment">interconnectAttachment</a></code> | <code>java.lang.String</code> | Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.metadataFields">metadataFields</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#project GoogleNetworkManagementVpcFlowLogsConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.state">state</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.vpnTunnel">vpnTunnel</a></code> | <code>java.lang.String</code> | Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#location GoogleNetworkManagementVpcFlowLogsConfig#location}

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId"></a>

```java
public java.lang.String getVpcFlowLogsConfigId();
```

- *Type:* java.lang.String

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#vpc_flow_logs_config_id GoogleNetworkManagementVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `aggregationInterval`<sup>Optional</sup> <a name="aggregationInterval" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.aggregationInterval"></a>

```java
public java.lang.String getAggregationInterval();
```

- *Type:* java.lang.String

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values:  AGGREGATION_INTERVAL_UNSPECIFIED INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#aggregation_interval GoogleNetworkManagementVpcFlowLogsConfig#aggregation_interval}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#description GoogleNetworkManagementVpcFlowLogsConfig#description}

---

##### `filterExpr`<sup>Optional</sup> <a name="filterExpr" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.filterExpr"></a>

```java
public java.lang.String getFilterExpr();
```

- *Type:* java.lang.String

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#filter_expr GoogleNetworkManagementVpcFlowLogsConfig#filter_expr}

---

##### `flowSampling`<sup>Optional</sup> <a name="flowSampling" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.flowSampling"></a>

```java
public java.lang.Number getFlowSampling();
```

- *Type:* java.lang.Number

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#flow_sampling GoogleNetworkManagementVpcFlowLogsConfig#flow_sampling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#id GoogleNetworkManagementVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnectAttachment`<sup>Optional</sup> <a name="interconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.interconnectAttachment"></a>

```java
public java.lang.String getInterconnectAttachment();
```

- *Type:* java.lang.String

Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#interconnect_attachment GoogleNetworkManagementVpcFlowLogsConfig#interconnect_attachment}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#labels GoogleNetworkManagementVpcFlowLogsConfig#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#metadata GoogleNetworkManagementVpcFlowLogsConfig#metadata}

---

##### `metadataFields`<sup>Optional</sup> <a name="metadataFields" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.metadataFields"></a>

```java
public java.util.List<java.lang.String> getMetadataFields();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#metadata_fields GoogleNetworkManagementVpcFlowLogsConfig#metadata_fields}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#project GoogleNetworkManagementVpcFlowLogsConfig#project}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.   Possible

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#state GoogleNetworkManagementVpcFlowLogsConfig#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.timeouts"></a>

```java
public GoogleNetworkManagementVpcFlowLogsConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#timeouts GoogleNetworkManagementVpcFlowLogsConfig#timeouts}

---

##### `vpnTunnel`<sup>Optional</sup> <a name="vpnTunnel" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.vpnTunnel"></a>

```java
public java.lang.String getVpnTunnel();
```

- *Type:* java.lang.String

Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#vpn_tunnel GoogleNetworkManagementVpcFlowLogsConfig#vpn_tunnel}

---

### GoogleNetworkManagementVpcFlowLogsConfigTimeouts <a name="GoogleNetworkManagementVpcFlowLogsConfigTimeouts" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_management_vpc_flow_logs_config.GoogleNetworkManagementVpcFlowLogsConfigTimeouts;

GoogleNetworkManagementVpcFlowLogsConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#create GoogleNetworkManagementVpcFlowLogsConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#delete GoogleNetworkManagementVpcFlowLogsConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#update GoogleNetworkManagementVpcFlowLogsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#create GoogleNetworkManagementVpcFlowLogsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#delete GoogleNetworkManagementVpcFlowLogsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_management_vpc_flow_logs_config#update GoogleNetworkManagementVpcFlowLogsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference <a name="GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_management_vpc_flow_logs_config.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference;

new GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a>

---




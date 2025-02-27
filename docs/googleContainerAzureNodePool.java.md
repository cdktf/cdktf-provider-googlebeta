# `googleContainerAzureNodePool` Submodule <a name="`googleContainerAzureNodePool` Submodule" id="@cdktf/provider-google-beta.googleContainerAzureNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAzureNodePool <a name="GoogleContainerAzureNodePool" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool google_container_azure_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePool;

GoogleContainerAzureNodePool.Builder.create(Construct scope, java.lang.String id)
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
    .autoscaling(GoogleContainerAzureNodePoolAutoscaling)
    .cluster(java.lang.String)
    .config(GoogleContainerAzureNodePoolConfigA)
    .location(java.lang.String)
    .maxPodsConstraint(GoogleContainerAzureNodePoolMaxPodsConstraint)
    .name(java.lang.String)
    .subnetId(java.lang.String)
    .version(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .azureAvailabilityZone(java.lang.String)
//  .id(java.lang.String)
//  .management(GoogleContainerAzureNodePoolManagement)
//  .project(java.lang.String)
//  .timeouts(GoogleContainerAzureNodePoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The azureCluster for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.maxPodsConstraint">maxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ARM ID of the subnet where the node pool VMs run. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.azureAvailabilityZone">azureAvailabilityZone</a></code> | <code>java.lang.String</code> | Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#id GoogleContainerAzureNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.management">management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.autoscaling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#autoscaling GoogleContainerAzureNodePool#autoscaling}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The azureCluster for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#cluster GoogleContainerAzureNodePool#cluster}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#config GoogleContainerAzureNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#location GoogleContainerAzureNodePool#location}

---

##### `maxPodsConstraint`<sup>Required</sup> <a name="maxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.maxPodsConstraint"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#max_pods_constraint GoogleContainerAzureNodePool#max_pods_constraint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#name GoogleContainerAzureNodePool#name}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

The ARM ID of the subnet where the node pool VMs run.

Make sure it's a subnet under the virtual network in the cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#subnet_id GoogleContainerAzureNodePool#subnet_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#version GoogleContainerAzureNodePool#version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#annotations GoogleContainerAzureNodePool#annotations}

---

##### `azureAvailabilityZone`<sup>Optional</sup> <a name="azureAvailabilityZone" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.azureAvailabilityZone"></a>

- *Type:* java.lang.String

Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#azure_availability_zone GoogleContainerAzureNodePool#azure_availability_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#id GoogleContainerAzureNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.management"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#management GoogleContainerAzureNodePool#management}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#project GoogleContainerAzureNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#timeouts GoogleContainerAzureNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putAutoscaling">putAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putManagement">putManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putMaxPodsConstraint">putMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAzureAvailabilityZone">resetAzureAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetManagement">resetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaling` <a name="putAutoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putAutoscaling"></a>

```java
public void putAutoscaling(GoogleContainerAzureNodePoolAutoscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig"></a>

```java
public void putConfig(GoogleContainerAzureNodePoolConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

---

##### `putManagement` <a name="putManagement" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putManagement"></a>

```java
public void putManagement(GoogleContainerAzureNodePoolManagement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

---

##### `putMaxPodsConstraint` <a name="putMaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putMaxPodsConstraint"></a>

```java
public void putMaxPodsConstraint(GoogleContainerAzureNodePoolMaxPodsConstraint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putMaxPodsConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putTimeouts"></a>

```java
public void putTimeouts(GoogleContainerAzureNodePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAzureAvailabilityZone` <a name="resetAzureAvailabilityZone" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAzureAvailabilityZone"></a>

```java
public void resetAzureAvailabilityZone()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetId"></a>

```java
public void resetId()
```

##### `resetManagement` <a name="resetManagement" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetManagement"></a>

```java
public void resetManagement()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContainerAzureNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePool;

GoogleContainerAzureNodePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePool;

GoogleContainerAzureNodePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePool;

GoogleContainerAzureNodePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePool;

GoogleContainerAzureNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleContainerAzureNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleContainerAzureNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleContainerAzureNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleContainerAzureNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAzureNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference">GoogleContainerAzureNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference">GoogleContainerAzureNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.management">management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference">GoogleContainerAzureNodePoolManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraint">maxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference">GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference">GoogleContainerAzureNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscalingInput">autoscalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZoneInput">azureAvailabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.managementInput">managementInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraintInput">maxPodsConstraintInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZone">azureAvailabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscaling"></a>

```java
public GoogleContainerAzureNodePoolAutoscalingOutputReference getAutoscaling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference">GoogleContainerAzureNodePoolAutoscalingOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.config"></a>

```java
public GoogleContainerAzureNodePoolConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference">GoogleContainerAzureNodePoolConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.management"></a>

```java
public GoogleContainerAzureNodePoolManagementOutputReference getManagement();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference">GoogleContainerAzureNodePoolManagementOutputReference</a>

---

##### `maxPodsConstraint`<sup>Required</sup> <a name="maxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraint"></a>

```java
public GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference getMaxPodsConstraint();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference">GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeouts"></a>

```java
public GoogleContainerAzureNodePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference">GoogleContainerAzureNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `autoscalingInput`<sup>Optional</sup> <a name="autoscalingInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscalingInput"></a>

```java
public GoogleContainerAzureNodePoolAutoscaling getAutoscalingInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

---

##### `azureAvailabilityZoneInput`<sup>Optional</sup> <a name="azureAvailabilityZoneInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZoneInput"></a>

```java
public java.lang.String getAzureAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.configInput"></a>

```java
public GoogleContainerAzureNodePoolConfigA getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managementInput`<sup>Optional</sup> <a name="managementInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.managementInput"></a>

```java
public GoogleContainerAzureNodePoolManagement getManagementInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

---

##### `maxPodsConstraintInput`<sup>Optional</sup> <a name="maxPodsConstraintInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraintInput"></a>

```java
public GoogleContainerAzureNodePoolMaxPodsConstraint getMaxPodsConstraintInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `azureAvailabilityZone`<sup>Required</sup> <a name="azureAvailabilityZone" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZone"></a>

```java
public java.lang.String getAzureAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAzureNodePoolAutoscaling <a name="GoogleContainerAzureNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolAutoscaling;

GoogleContainerAzureNodePoolAutoscaling.builder()
    .maxNodeCount(java.lang.Number)
    .minNodeCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | Maximum number of nodes in the node pool. Must be >= min_node_count. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count. |

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

Maximum number of nodes in the node pool. Must be >= min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#max_node_count GoogleContainerAzureNodePool#max_node_count}

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#min_node_count GoogleContainerAzureNodePool#min_node_count}

---

### GoogleContainerAzureNodePoolConfig <a name="GoogleContainerAzureNodePoolConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolConfig;

GoogleContainerAzureNodePoolConfig.builder()
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
    .autoscaling(GoogleContainerAzureNodePoolAutoscaling)
    .cluster(java.lang.String)
    .config(GoogleContainerAzureNodePoolConfigA)
    .location(java.lang.String)
    .maxPodsConstraint(GoogleContainerAzureNodePoolMaxPodsConstraint)
    .name(java.lang.String)
    .subnetId(java.lang.String)
    .version(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .azureAvailabilityZone(java.lang.String)
//  .id(java.lang.String)
//  .management(GoogleContainerAzureNodePoolManagement)
//  .project(java.lang.String)
//  .timeouts(GoogleContainerAzureNodePoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The azureCluster for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.maxPodsConstraint">maxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ARM ID of the subnet where the node pool VMs run. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.version">version</a></code> | <code>java.lang.String</code> | The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.azureAvailabilityZone">azureAvailabilityZone</a></code> | <code>java.lang.String</code> | Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#id GoogleContainerAzureNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.management">management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.autoscaling"></a>

```java
public GoogleContainerAzureNodePoolAutoscaling getAutoscaling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#autoscaling GoogleContainerAzureNodePool#autoscaling}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The azureCluster for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#cluster GoogleContainerAzureNodePool#cluster}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.config"></a>

```java
public GoogleContainerAzureNodePoolConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#config GoogleContainerAzureNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#location GoogleContainerAzureNodePool#location}

---

##### `maxPodsConstraint`<sup>Required</sup> <a name="maxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.maxPodsConstraint"></a>

```java
public GoogleContainerAzureNodePoolMaxPodsConstraint getMaxPodsConstraint();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#max_pods_constraint GoogleContainerAzureNodePool#max_pods_constraint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#name GoogleContainerAzureNodePool#name}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

The ARM ID of the subnet where the node pool VMs run.

Make sure it's a subnet under the virtual network in the cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#subnet_id GoogleContainerAzureNodePool#subnet_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#version GoogleContainerAzureNodePool#version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#annotations GoogleContainerAzureNodePool#annotations}

---

##### `azureAvailabilityZone`<sup>Optional</sup> <a name="azureAvailabilityZone" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.azureAvailabilityZone"></a>

```java
public java.lang.String getAzureAvailabilityZone();
```

- *Type:* java.lang.String

Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#azure_availability_zone GoogleContainerAzureNodePool#azure_availability_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#id GoogleContainerAzureNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.management"></a>

```java
public GoogleContainerAzureNodePoolManagement getManagement();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#management GoogleContainerAzureNodePool#management}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#project GoogleContainerAzureNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.timeouts"></a>

```java
public GoogleContainerAzureNodePoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#timeouts GoogleContainerAzureNodePool#timeouts}

---

### GoogleContainerAzureNodePoolConfigA <a name="GoogleContainerAzureNodePoolConfigA" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolConfigA;

GoogleContainerAzureNodePoolConfigA.builder()
    .sshConfig(GoogleContainerAzureNodePoolConfigSshConfig)
//  .imageType(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .proxyConfig(GoogleContainerAzureNodePoolConfigProxyConfig)
//  .rootVolume(GoogleContainerAzureNodePoolConfigRootVolume)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .vmSize(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.imageType">imageType</a></code> | <code>java.lang.String</code> | The OS image type to use on node pool instances. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`. |

---

##### `sshConfig`<sup>Required</sup> <a name="sshConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.sshConfig"></a>

```java
public GoogleContainerAzureNodePoolConfigSshConfig getSshConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#ssh_config GoogleContainerAzureNodePool#ssh_config}

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

The OS image type to use on node pool instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#image_type GoogleContainerAzureNodePool#image_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#labels GoogleContainerAzureNodePool#labels}

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.proxyConfig"></a>

```java
public GoogleContainerAzureNodePoolConfigProxyConfig getProxyConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#proxy_config GoogleContainerAzureNodePool#proxy_config}

---

##### `rootVolume`<sup>Optional</sup> <a name="rootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.rootVolume"></a>

```java
public GoogleContainerAzureNodePoolConfigRootVolume getRootVolume();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#root_volume GoogleContainerAzureNodePool#root_volume}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

A set of tags to apply to all underlying Azure resources for this node pool. This currently only includes Virtual Machine Scale Sets. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#tags GoogleContainerAzureNodePool#tags}

---

##### `vmSize`<sup>Optional</sup> <a name="vmSize" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#vm_size GoogleContainerAzureNodePool#vm_size}

---

### GoogleContainerAzureNodePoolConfigProxyConfig <a name="GoogleContainerAzureNodePoolConfigProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolConfigProxyConfig;

GoogleContainerAzureNodePoolConfigProxyConfig.builder()
    .resourceGroupId(java.lang.String)
    .secretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`. |

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#resource_group_id GoogleContainerAzureNodePool#resource_group_id}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#secret_id GoogleContainerAzureNodePool#secret_id}

---

### GoogleContainerAzureNodePoolConfigRootVolume <a name="GoogleContainerAzureNodePoolConfigRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolConfigRootVolume;

GoogleContainerAzureNodePoolConfigRootVolume.builder()
//  .sizeGib(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume.property.sizeGib">sizeGib</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `sizeGib`<sup>Optional</sup> <a name="sizeGib" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume.property.sizeGib"></a>

```java
public java.lang.Number getSizeGib();
```

- *Type:* java.lang.Number

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#size_gib GoogleContainerAzureNodePool#size_gib}

---

### GoogleContainerAzureNodePoolConfigSshConfig <a name="GoogleContainerAzureNodePoolConfigSshConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolConfigSshConfig;

GoogleContainerAzureNodePoolConfigSshConfig.builder()
    .authorizedKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig.property.authorizedKey">authorizedKey</a></code> | <code>java.lang.String</code> | The SSH public key data for VMs managed by Anthos. |

---

##### `authorizedKey`<sup>Required</sup> <a name="authorizedKey" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig.property.authorizedKey"></a>

```java
public java.lang.String getAuthorizedKey();
```

- *Type:* java.lang.String

The SSH public key data for VMs managed by Anthos.

This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#authorized_key GoogleContainerAzureNodePool#authorized_key}

---

### GoogleContainerAzureNodePoolManagement <a name="GoogleContainerAzureNodePoolManagement" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolManagement;

GoogleContainerAzureNodePoolManagement.builder()
//  .autoRepair(java.lang.Boolean)
//  .autoRepair(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement.property.autoRepair">autoRepair</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. Whether or not the nodes will be automatically repaired. |

---

##### `autoRepair`<sup>Optional</sup> <a name="autoRepair" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement.property.autoRepair"></a>

```java
public java.lang.Object getAutoRepair();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. Whether or not the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#auto_repair GoogleContainerAzureNodePool#auto_repair}

---

### GoogleContainerAzureNodePoolMaxPodsConstraint <a name="GoogleContainerAzureNodePoolMaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolMaxPodsConstraint;

GoogleContainerAzureNodePoolMaxPodsConstraint.builder()
    .maxPodsPerNode(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | The maximum number of pods to schedule on a single node. |

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint.property.maxPodsPerNode"></a>

```java
public java.lang.Number getMaxPodsPerNode();
```

- *Type:* java.lang.Number

The maximum number of pods to schedule on a single node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#max_pods_per_node GoogleContainerAzureNodePool#max_pods_per_node}

---

### GoogleContainerAzureNodePoolTimeouts <a name="GoogleContainerAzureNodePoolTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolTimeouts;

GoogleContainerAzureNodePoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#create GoogleContainerAzureNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#delete GoogleContainerAzureNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#update GoogleContainerAzureNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#create GoogleContainerAzureNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#delete GoogleContainerAzureNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_azure_node_pool#update GoogleContainerAzureNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAzureNodePoolAutoscalingOutputReference <a name="GoogleContainerAzureNodePoolAutoscalingOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolAutoscalingOutputReference;

new GoogleContainerAzureNodePoolAutoscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```java
public java.lang.Number getMaxNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```java
public java.lang.Number getMinNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureNodePoolAutoscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

---


### GoogleContainerAzureNodePoolConfigAOutputReference <a name="GoogleContainerAzureNodePoolConfigAOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolConfigAOutputReference;

new GoogleContainerAzureNodePoolConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putProxyConfig">putProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putRootVolume">putRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putSshConfig">putSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetImageType">resetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetProxyConfig">resetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetRootVolume">resetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetVmSize">resetVmSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProxyConfig` <a name="putProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putProxyConfig"></a>

```java
public void putProxyConfig(GoogleContainerAzureNodePoolConfigProxyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

---

##### `putRootVolume` <a name="putRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putRootVolume"></a>

```java
public void putRootVolume(GoogleContainerAzureNodePoolConfigRootVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

---

##### `putSshConfig` <a name="putSshConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putSshConfig"></a>

```java
public void putSshConfig(GoogleContainerAzureNodePoolConfigSshConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

---

##### `resetImageType` <a name="resetImageType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetImageType"></a>

```java
public void resetImageType()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProxyConfig` <a name="resetProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetProxyConfig"></a>

```java
public void resetProxyConfig()
```

##### `resetRootVolume` <a name="resetRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetRootVolume"></a>

```java
public void resetRootVolume()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetVmSize` <a name="resetVmSize" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetVmSize"></a>

```java
public void resetVmSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference">GoogleContainerAzureNodePoolConfigProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference">GoogleContainerAzureNodePoolConfigRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference">GoogleContainerAzureNodePoolConfigSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageTypeInput">imageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfigInput">proxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolumeInput">rootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfigInput">sshConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageType">imageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfig"></a>

```java
public GoogleContainerAzureNodePoolConfigProxyConfigOutputReference getProxyConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference">GoogleContainerAzureNodePoolConfigProxyConfigOutputReference</a>

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolume"></a>

```java
public GoogleContainerAzureNodePoolConfigRootVolumeOutputReference getRootVolume();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference">GoogleContainerAzureNodePoolConfigRootVolumeOutputReference</a>

---

##### `sshConfig`<sup>Required</sup> <a name="sshConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfig"></a>

```java
public GoogleContainerAzureNodePoolConfigSshConfigOutputReference getSshConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference">GoogleContainerAzureNodePoolConfigSshConfigOutputReference</a>

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageTypeInput"></a>

```java
public java.lang.String getImageTypeInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `proxyConfigInput`<sup>Optional</sup> <a name="proxyConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfigInput"></a>

```java
public GoogleContainerAzureNodePoolConfigProxyConfig getProxyConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

---

##### `rootVolumeInput`<sup>Optional</sup> <a name="rootVolumeInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolumeInput"></a>

```java
public GoogleContainerAzureNodePoolConfigRootVolume getRootVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

---

##### `sshConfigInput`<sup>Optional</sup> <a name="sshConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfigInput"></a>

```java
public GoogleContainerAzureNodePoolConfigSshConfig getSshConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureNodePoolConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

---


### GoogleContainerAzureNodePoolConfigProxyConfigOutputReference <a name="GoogleContainerAzureNodePoolConfigProxyConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference;

new GoogleContainerAzureNodePoolConfigProxyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupIdInput"></a>

```java
public java.lang.String getResourceGroupIdInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureNodePoolConfigProxyConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

---


### GoogleContainerAzureNodePoolConfigRootVolumeOutputReference <a name="GoogleContainerAzureNodePoolConfigRootVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference;

new GoogleContainerAzureNodePoolConfigRootVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resetSizeGib">resetSizeGib</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSizeGib` <a name="resetSizeGib" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resetSizeGib"></a>

```java
public void resetSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGibInput">sizeGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGib">sizeGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeGibInput`<sup>Optional</sup> <a name="sizeGibInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGibInput"></a>

```java
public java.lang.Number getSizeGibInput();
```

- *Type:* java.lang.Number

---

##### `sizeGib`<sup>Required</sup> <a name="sizeGib" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGib"></a>

```java
public java.lang.Number getSizeGib();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureNodePoolConfigRootVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

---


### GoogleContainerAzureNodePoolConfigSshConfigOutputReference <a name="GoogleContainerAzureNodePoolConfigSshConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference;

new GoogleContainerAzureNodePoolConfigSshConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKeyInput">authorizedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKey">authorizedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizedKeyInput`<sup>Optional</sup> <a name="authorizedKeyInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKeyInput"></a>

```java
public java.lang.String getAuthorizedKeyInput();
```

- *Type:* java.lang.String

---

##### `authorizedKey`<sup>Required</sup> <a name="authorizedKey" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKey"></a>

```java
public java.lang.String getAuthorizedKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureNodePoolConfigSshConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

---


### GoogleContainerAzureNodePoolManagementOutputReference <a name="GoogleContainerAzureNodePoolManagementOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolManagementOutputReference;

new GoogleContainerAzureNodePoolManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resetAutoRepair">resetAutoRepair</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRepair` <a name="resetAutoRepair" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resetAutoRepair"></a>

```java
public void resetAutoRepair()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepairInput">autoRepairInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepair">autoRepair</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoRepairInput`<sup>Optional</sup> <a name="autoRepairInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepairInput"></a>

```java
public java.lang.Object getAutoRepairInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoRepair`<sup>Required</sup> <a name="autoRepair" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepair"></a>

```java
public java.lang.Object getAutoRepair();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureNodePoolManagement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

---


### GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference <a name="GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference;

new GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput"></a>

```java
public java.lang.Number getMaxPodsPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode"></a>

```java
public java.lang.Number getMaxPodsPerNode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.internalValue"></a>

```java
public GoogleContainerAzureNodePoolMaxPodsConstraint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

---


### GoogleContainerAzureNodePoolTimeoutsOutputReference <a name="GoogleContainerAzureNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_azure_node_pool.GoogleContainerAzureNodePoolTimeoutsOutputReference;

new GoogleContainerAzureNodePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>

---




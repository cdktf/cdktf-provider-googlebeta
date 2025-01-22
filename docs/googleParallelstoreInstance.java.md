# `googleParallelstoreInstance` Submodule <a name="`googleParallelstoreInstance` Submodule" id="@cdktf/provider-google-beta.googleParallelstoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleParallelstoreInstance <a name="GoogleParallelstoreInstance" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance google_parallelstore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_parallelstore_instance.GoogleParallelstoreInstance;

GoogleParallelstoreInstance.Builder.create(Construct scope, java.lang.String id)
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
    .capacityGib(java.lang.String)
    .instanceId(java.lang.String)
    .location(java.lang.String)
//  .deploymentType(java.lang.String)
//  .description(java.lang.String)
//  .directoryStripeLevel(java.lang.String)
//  .fileStripeLevel(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .reservedIpRange(java.lang.String)
//  .timeouts(GoogleParallelstoreInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.capacityGib">capacityGib</a></code> | <code>java.lang.String</code> | Required. Immutable. Storage capacity of Parallelstore instance in Gibibytes (GiB). |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The logical name of the Parallelstore instance in the user project with the following restrictions:   * Must contain only lowercase letters, numbers, and hyphens. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Parallelstore Instance deployment type.   Possible values:   DEPLOYMENT_TYPE_UNSPECIFIED   SCRATCH   PERSISTENT. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the instance. 2048 characters or less. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.directoryStripeLevel">directoryStripeLevel</a></code> | <code>java.lang.String</code> | Stripe level for directories. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.fileStripeLevel">fileStripeLevel</a></code> | <code>java.lang.String</code> | Stripe level for files. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#id GoogleParallelstoreInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | Immutable. The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#project GoogleParallelstoreInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.reservedIpRange">reservedIpRange</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.capacityGib"></a>

- *Type:* java.lang.String

Required. Immutable. Storage capacity of Parallelstore instance in Gibibytes (GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#capacity_gib GoogleParallelstoreInstance#capacity_gib}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

The logical name of the Parallelstore instance in the user project with the following restrictions:   * Must contain only lowercase letters, numbers, and hyphens.

* Must start with a letter.

  * Must be between 1-63 characters.
  * Must end with a number or a letter.
  * Must be unique within the customer project/ location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#instance_id GoogleParallelstoreInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#location GoogleParallelstoreInstance#location}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.deploymentType"></a>

- *Type:* java.lang.String

Parallelstore Instance deployment type.   Possible values:   DEPLOYMENT_TYPE_UNSPECIFIED   SCRATCH   PERSISTENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#deployment_type GoogleParallelstoreInstance#deployment_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the instance. 2048 characters or less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#description GoogleParallelstoreInstance#description}

---

##### `directoryStripeLevel`<sup>Optional</sup> <a name="directoryStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.directoryStripeLevel"></a>

- *Type:* java.lang.String

Stripe level for directories.

MIN when directory has a small number of files.
MAX when directory has a large number of files.
Possible values:
DIRECTORY_STRIPE_LEVEL_UNSPECIFIED
DIRECTORY_STRIPE_LEVEL_MIN
DIRECTORY_STRIPE_LEVEL_BALANCED
DIRECTORY_STRIPE_LEVEL_MAX

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#directory_stripe_level GoogleParallelstoreInstance#directory_stripe_level}

---

##### `fileStripeLevel`<sup>Optional</sup> <a name="fileStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.fileStripeLevel"></a>

- *Type:* java.lang.String

Stripe level for files.

MIN better suited for small size files.
MAX higher throughput performance for larger files.
Possible values:
FILE_STRIPE_LEVEL_UNSPECIFIED
FILE_STRIPE_LEVEL_MIN
FILE_STRIPE_LEVEL_BALANCED
FILE_STRIPE_LEVEL_MAX

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#file_stripe_level GoogleParallelstoreInstance#file_stripe_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#id GoogleParallelstoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies.

Cloud Labels can be used to filter collections
of resources. They can be used to control how resource metrics are aggregated.
And they can be used as arguments to policy management rules (e.g. route, firewall,
load balancing, etc.).

* Label keys must be between 1 and 63 characters long and must conform to
  the following regular expression: 'a-z{0,62}'.
* Label values must be between 0 and 63 characters long and must conform
  to the regular expression '[a-z0-9_-]{0,63}'.
* No more than 64 labels can be associated with a given resource.

See https://goo.gl/xmQnxf for more information on and examples of labels.

If you plan to use labels in your own code, please note that additional
characters may be allowed in the future. Therefore, you are advised to use
an internal label representation, such as JSON, which doesn't rely upon
specific characters being disallowed.  For example, representing labels
as the string:  'name + "*" + value' would prove problematic if we were to
allow '"*"' in a future release. "

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#labels GoogleParallelstoreInstance#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.network"></a>

- *Type:* java.lang.String

Immutable. The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#network GoogleParallelstoreInstance#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#project GoogleParallelstoreInstance#project}.

---

##### `reservedIpRange`<sup>Optional</sup> <a name="reservedIpRange" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.reservedIpRange"></a>

- *Type:* java.lang.String

Immutable.

Contains the id of the allocated IP address range
associated with the private service access connection for example, "test-default"
associated with IP range 10.0.0.0/29. If no range id is provided all ranges will
be considered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#reserved_ip_range GoogleParallelstoreInstance#reserved_ip_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#timeouts GoogleParallelstoreInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDirectoryStripeLevel">resetDirectoryStripeLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetFileStripeLevel">resetFileStripeLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetReservedIpRange">resetReservedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.putTimeouts"></a>

```java
public void putTimeouts(GoogleParallelstoreInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a>

---

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDeploymentType"></a>

```java
public void resetDeploymentType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDirectoryStripeLevel` <a name="resetDirectoryStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDirectoryStripeLevel"></a>

```java
public void resetDirectoryStripeLevel()
```

##### `resetFileStripeLevel` <a name="resetFileStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetFileStripeLevel"></a>

```java
public void resetFileStripeLevel()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetReservedIpRange` <a name="resetReservedIpRange" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetReservedIpRange"></a>

```java
public void resetReservedIpRange()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleParallelstoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_parallelstore_instance.GoogleParallelstoreInstance;

GoogleParallelstoreInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_parallelstore_instance.GoogleParallelstoreInstance;

GoogleParallelstoreInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_parallelstore_instance.GoogleParallelstoreInstance;

GoogleParallelstoreInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_parallelstore_instance.GoogleParallelstoreInstance;

GoogleParallelstoreInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleParallelstoreInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleParallelstoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleParallelstoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleParallelstoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleParallelstoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.accessPoints">accessPoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.daosVersion">daosVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.effectiveReservedIpRange">effectiveReservedIpRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference">GoogleParallelstoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.capacityGibInput">capacityGibInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.directoryStripeLevelInput">directoryStripeLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fileStripeLevelInput">fileStripeLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.reservedIpRangeInput">reservedIpRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.capacityGib">capacityGib</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.directoryStripeLevel">directoryStripeLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fileStripeLevel">fileStripeLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.reservedIpRange">reservedIpRange</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessPoints`<sup>Required</sup> <a name="accessPoints" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.accessPoints"></a>

```java
public java.util.List<java.lang.String> getAccessPoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `daosVersion`<sup>Required</sup> <a name="daosVersion" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.daosVersion"></a>

```java
public java.lang.String getDaosVersion();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveReservedIpRange`<sup>Required</sup> <a name="effectiveReservedIpRange" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.effectiveReservedIpRange"></a>

```java
public java.lang.String getEffectiveReservedIpRange();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.timeouts"></a>

```java
public GoogleParallelstoreInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference">GoogleParallelstoreInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `capacityGibInput`<sup>Optional</sup> <a name="capacityGibInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.capacityGibInput"></a>

```java
public java.lang.String getCapacityGibInput();
```

- *Type:* java.lang.String

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.deploymentTypeInput"></a>

```java
public java.lang.String getDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `directoryStripeLevelInput`<sup>Optional</sup> <a name="directoryStripeLevelInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.directoryStripeLevelInput"></a>

```java
public java.lang.String getDirectoryStripeLevelInput();
```

- *Type:* java.lang.String

---

##### `fileStripeLevelInput`<sup>Optional</sup> <a name="fileStripeLevelInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fileStripeLevelInput"></a>

```java
public java.lang.String getFileStripeLevelInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `reservedIpRangeInput`<sup>Optional</sup> <a name="reservedIpRangeInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.reservedIpRangeInput"></a>

```java
public java.lang.String getReservedIpRangeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a>

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.capacityGib"></a>

```java
public java.lang.String getCapacityGib();
```

- *Type:* java.lang.String

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `directoryStripeLevel`<sup>Required</sup> <a name="directoryStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.directoryStripeLevel"></a>

```java
public java.lang.String getDirectoryStripeLevel();
```

- *Type:* java.lang.String

---

##### `fileStripeLevel`<sup>Required</sup> <a name="fileStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fileStripeLevel"></a>

```java
public java.lang.String getFileStripeLevel();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `reservedIpRange`<sup>Required</sup> <a name="reservedIpRange" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.reservedIpRange"></a>

```java
public java.lang.String getReservedIpRange();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleParallelstoreInstanceConfig <a name="GoogleParallelstoreInstanceConfig" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_parallelstore_instance.GoogleParallelstoreInstanceConfig;

GoogleParallelstoreInstanceConfig.builder()
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
    .capacityGib(java.lang.String)
    .instanceId(java.lang.String)
    .location(java.lang.String)
//  .deploymentType(java.lang.String)
//  .description(java.lang.String)
//  .directoryStripeLevel(java.lang.String)
//  .fileStripeLevel(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .reservedIpRange(java.lang.String)
//  .timeouts(GoogleParallelstoreInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.capacityGib">capacityGib</a></code> | <code>java.lang.String</code> | Required. Immutable. Storage capacity of Parallelstore instance in Gibibytes (GiB). |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The logical name of the Parallelstore instance in the user project with the following restrictions:   * Must contain only lowercase letters, numbers, and hyphens. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Parallelstore Instance deployment type.   Possible values:   DEPLOYMENT_TYPE_UNSPECIFIED   SCRATCH   PERSISTENT. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the instance. 2048 characters or less. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.directoryStripeLevel">directoryStripeLevel</a></code> | <code>java.lang.String</code> | Stripe level for directories. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.fileStripeLevel">fileStripeLevel</a></code> | <code>java.lang.String</code> | Stripe level for files. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#id GoogleParallelstoreInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.network">network</a></code> | <code>java.lang.String</code> | Immutable. The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#project GoogleParallelstoreInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.reservedIpRange">reservedIpRange</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.capacityGib"></a>

```java
public java.lang.String getCapacityGib();
```

- *Type:* java.lang.String

Required. Immutable. Storage capacity of Parallelstore instance in Gibibytes (GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#capacity_gib GoogleParallelstoreInstance#capacity_gib}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The logical name of the Parallelstore instance in the user project with the following restrictions:   * Must contain only lowercase letters, numbers, and hyphens.

* Must start with a letter.

  * Must be between 1-63 characters.
  * Must end with a number or a letter.
  * Must be unique within the customer project/ location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#instance_id GoogleParallelstoreInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#location GoogleParallelstoreInstance#location}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

Parallelstore Instance deployment type.   Possible values:   DEPLOYMENT_TYPE_UNSPECIFIED   SCRATCH   PERSISTENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#deployment_type GoogleParallelstoreInstance#deployment_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the instance. 2048 characters or less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#description GoogleParallelstoreInstance#description}

---

##### `directoryStripeLevel`<sup>Optional</sup> <a name="directoryStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.directoryStripeLevel"></a>

```java
public java.lang.String getDirectoryStripeLevel();
```

- *Type:* java.lang.String

Stripe level for directories.

MIN when directory has a small number of files.
MAX when directory has a large number of files.
Possible values:
DIRECTORY_STRIPE_LEVEL_UNSPECIFIED
DIRECTORY_STRIPE_LEVEL_MIN
DIRECTORY_STRIPE_LEVEL_BALANCED
DIRECTORY_STRIPE_LEVEL_MAX

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#directory_stripe_level GoogleParallelstoreInstance#directory_stripe_level}

---

##### `fileStripeLevel`<sup>Optional</sup> <a name="fileStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.fileStripeLevel"></a>

```java
public java.lang.String getFileStripeLevel();
```

- *Type:* java.lang.String

Stripe level for files.

MIN better suited for small size files.
MAX higher throughput performance for larger files.
Possible values:
FILE_STRIPE_LEVEL_UNSPECIFIED
FILE_STRIPE_LEVEL_MIN
FILE_STRIPE_LEVEL_BALANCED
FILE_STRIPE_LEVEL_MAX

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#file_stripe_level GoogleParallelstoreInstance#file_stripe_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#id GoogleParallelstoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies.

Cloud Labels can be used to filter collections
of resources. They can be used to control how resource metrics are aggregated.
And they can be used as arguments to policy management rules (e.g. route, firewall,
load balancing, etc.).

* Label keys must be between 1 and 63 characters long and must conform to
  the following regular expression: 'a-z{0,62}'.
* Label values must be between 0 and 63 characters long and must conform
  to the regular expression '[a-z0-9_-]{0,63}'.
* No more than 64 labels can be associated with a given resource.

See https://goo.gl/xmQnxf for more information on and examples of labels.

If you plan to use labels in your own code, please note that additional
characters may be allowed in the future. Therefore, you are advised to use
an internal label representation, such as JSON, which doesn't rely upon
specific characters being disallowed.  For example, representing labels
as the string:  'name + "*" + value' would prove problematic if we were to
allow '"*"' in a future release. "

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#labels GoogleParallelstoreInstance#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Immutable. The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#network GoogleParallelstoreInstance#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#project GoogleParallelstoreInstance#project}.

---

##### `reservedIpRange`<sup>Optional</sup> <a name="reservedIpRange" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.reservedIpRange"></a>

```java
public java.lang.String getReservedIpRange();
```

- *Type:* java.lang.String

Immutable.

Contains the id of the allocated IP address range
associated with the private service access connection for example, "test-default"
associated with IP range 10.0.0.0/29. If no range id is provided all ranges will
be considered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#reserved_ip_range GoogleParallelstoreInstance#reserved_ip_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.timeouts"></a>

```java
public GoogleParallelstoreInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#timeouts GoogleParallelstoreInstance#timeouts}

---

### GoogleParallelstoreInstanceTimeouts <a name="GoogleParallelstoreInstanceTimeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_parallelstore_instance.GoogleParallelstoreInstanceTimeouts;

GoogleParallelstoreInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#create GoogleParallelstoreInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#delete GoogleParallelstoreInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#update GoogleParallelstoreInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#create GoogleParallelstoreInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#delete GoogleParallelstoreInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_parallelstore_instance#update GoogleParallelstoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleParallelstoreInstanceTimeoutsOutputReference <a name="GoogleParallelstoreInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_parallelstore_instance.GoogleParallelstoreInstanceTimeoutsOutputReference;

new GoogleParallelstoreInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a>

---




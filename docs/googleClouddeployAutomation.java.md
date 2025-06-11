# `googleClouddeployAutomation` Submodule <a name="`googleClouddeployAutomation` Submodule" id="@cdktf/provider-google-beta.googleClouddeployAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployAutomation <a name="GoogleClouddeployAutomation" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation google_clouddeploy_automation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomation;

GoogleClouddeployAutomation.Builder.create(Construct scope, java.lang.String id)
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
    .deliveryPipeline(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .rules(IResolvable)
    .rules(java.util.List<GoogleClouddeployAutomationRules>)
    .selector(GoogleClouddeployAutomationSelector)
    .serviceAccount(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .suspended(java.lang.Boolean)
//  .suspended(IResolvable)
//  .timeouts(GoogleClouddeployAutomationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.deliveryPipeline">deliveryPipeline</a></code> | <code>java.lang.String</code> | The delivery_pipeline for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the 'Automation'. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.selector">selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of the 'Automation'. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#project GoogleClouddeployAutomation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. When Suspended, automation is deactivated from execution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deliveryPipeline`<sup>Required</sup> <a name="deliveryPipeline" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.deliveryPipeline"></a>

- *Type:* java.lang.String

The delivery_pipeline for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#delivery_pipeline GoogleClouddeployAutomation#delivery_pipeline}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#location GoogleClouddeployAutomation#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the 'Automation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#name GoogleClouddeployAutomation#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#rules GoogleClouddeployAutomation#rules}

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.selector"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#selector GoogleClouddeployAutomation#selector}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#service_account GoogleClouddeployAutomation#service_account}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash ('/'). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ('[a-z0-9A-Z]') with dashes ('-'), underscores ('_'), dots ('.'), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots('.'), not longer than 253 characters in total, followed by a slash ('/'). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#annotations GoogleClouddeployAutomation#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. Description of the 'Automation'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#description GoogleClouddeployAutomation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#labels GoogleClouddeployAutomation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#project GoogleClouddeployAutomation#project}.

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.suspended"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. When Suspended, automation is deactivated from execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#suspended GoogleClouddeployAutomation#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#timeouts GoogleClouddeployAutomation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetSuspended">resetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<GoogleClouddeployAutomationRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>>

---

##### `putSelector` <a name="putSelector" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putSelector"></a>

```java
public void putSelector(GoogleClouddeployAutomationSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putTimeouts"></a>

```java
public void putTimeouts(GoogleClouddeployAutomationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetProject"></a>

```java
public void resetProject()
```

##### `resetSuspended` <a name="resetSuspended" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetSuspended"></a>

```java
public void resetSuspended()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleClouddeployAutomation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomation;

GoogleClouddeployAutomation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomation;

GoogleClouddeployAutomation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomation;

GoogleClouddeployAutomation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomation;

GoogleClouddeployAutomation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleClouddeployAutomation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleClouddeployAutomation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleClouddeployAutomation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleClouddeployAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList">GoogleClouddeployAutomationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference">GoogleClouddeployAutomationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference">GoogleClouddeployAutomationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.deliveryPipelineInput">deliveryPipelineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.selectorInput">selectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.suspendedInput">suspendedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.deliveryPipeline">deliveryPipeline</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.rules"></a>

```java
public GoogleClouddeployAutomationRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList">GoogleClouddeployAutomationRulesList</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.selector"></a>

```java
public GoogleClouddeployAutomationSelectorOutputReference getSelector();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference">GoogleClouddeployAutomationSelectorOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.timeouts"></a>

```java
public GoogleClouddeployAutomationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference">GoogleClouddeployAutomationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deliveryPipelineInput`<sup>Optional</sup> <a name="deliveryPipelineInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.deliveryPipelineInput"></a>

```java
public java.lang.String getDeliveryPipelineInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>>

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.selectorInput"></a>

```java
public GoogleClouddeployAutomationSelector getSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `suspendedInput`<sup>Optional</sup> <a name="suspendedInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.suspendedInput"></a>

```java
public java.lang.Object getSuspendedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deliveryPipeline`<sup>Required</sup> <a name="deliveryPipeline" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.deliveryPipeline"></a>

```java
public java.lang.String getDeliveryPipeline();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.suspended"></a>

```java
public java.lang.Object getSuspended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployAutomationConfig <a name="GoogleClouddeployAutomationConfig" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationConfig;

GoogleClouddeployAutomationConfig.builder()
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
    .deliveryPipeline(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .rules(IResolvable)
    .rules(java.util.List<GoogleClouddeployAutomationRules>)
    .selector(GoogleClouddeployAutomationSelector)
    .serviceAccount(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .suspended(java.lang.Boolean)
//  .suspended(IResolvable)
//  .timeouts(GoogleClouddeployAutomationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.deliveryPipeline">deliveryPipeline</a></code> | <code>java.lang.String</code> | The delivery_pipeline for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the 'Automation'. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of the 'Automation'. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#project GoogleClouddeployAutomation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. When Suspended, automation is deactivated from execution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deliveryPipeline`<sup>Required</sup> <a name="deliveryPipeline" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.deliveryPipeline"></a>

```java
public java.lang.String getDeliveryPipeline();
```

- *Type:* java.lang.String

The delivery_pipeline for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#delivery_pipeline GoogleClouddeployAutomation#delivery_pipeline}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#location GoogleClouddeployAutomation#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the 'Automation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#name GoogleClouddeployAutomation#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#rules GoogleClouddeployAutomation#rules}

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.selector"></a>

```java
public GoogleClouddeployAutomationSelector getSelector();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#selector GoogleClouddeployAutomation#selector}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#service_account GoogleClouddeployAutomation#service_account}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash ('/'). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ('[a-z0-9A-Z]') with dashes ('-'), underscores ('_'), dots ('.'), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots('.'), not longer than 253 characters in total, followed by a slash ('/'). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#annotations GoogleClouddeployAutomation#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. Description of the 'Automation'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#description GoogleClouddeployAutomation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#labels GoogleClouddeployAutomation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#project GoogleClouddeployAutomation#project}.

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.suspended"></a>

```java
public java.lang.Object getSuspended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. When Suspended, automation is deactivated from execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#suspended GoogleClouddeployAutomation#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.timeouts"></a>

```java
public GoogleClouddeployAutomationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#timeouts GoogleClouddeployAutomation#timeouts}

---

### GoogleClouddeployAutomationRules <a name="GoogleClouddeployAutomationRules" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRules;

GoogleClouddeployAutomationRules.builder()
//  .advanceRolloutRule(GoogleClouddeployAutomationRulesAdvanceRolloutRule)
//  .promoteReleaseRule(GoogleClouddeployAutomationRulesPromoteReleaseRule)
//  .repairRolloutRule(GoogleClouddeployAutomationRulesRepairRolloutRule)
//  .timedPromoteReleaseRule(GoogleClouddeployAutomationRulesTimedPromoteReleaseRule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.advanceRolloutRule">advanceRolloutRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a></code> | advance_rollout_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.promoteReleaseRule">promoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a></code> | promote_release_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.repairRolloutRule">repairRolloutRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule">GoogleClouddeployAutomationRulesRepairRolloutRule</a></code> | repair_rollout_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.timedPromoteReleaseRule">timedPromoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule">GoogleClouddeployAutomationRulesTimedPromoteReleaseRule</a></code> | timed_promote_release_rule block. |

---

##### `advanceRolloutRule`<sup>Optional</sup> <a name="advanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.advanceRolloutRule"></a>

```java
public GoogleClouddeployAutomationRulesAdvanceRolloutRule getAdvanceRolloutRule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a>

advance_rollout_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#advance_rollout_rule GoogleClouddeployAutomation#advance_rollout_rule}

---

##### `promoteReleaseRule`<sup>Optional</sup> <a name="promoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.promoteReleaseRule"></a>

```java
public GoogleClouddeployAutomationRulesPromoteReleaseRule getPromoteReleaseRule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a>

promote_release_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#promote_release_rule GoogleClouddeployAutomation#promote_release_rule}

---

##### `repairRolloutRule`<sup>Optional</sup> <a name="repairRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.repairRolloutRule"></a>

```java
public GoogleClouddeployAutomationRulesRepairRolloutRule getRepairRolloutRule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule">GoogleClouddeployAutomationRulesRepairRolloutRule</a>

repair_rollout_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#repair_rollout_rule GoogleClouddeployAutomation#repair_rollout_rule}

---

##### `timedPromoteReleaseRule`<sup>Optional</sup> <a name="timedPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.timedPromoteReleaseRule"></a>

```java
public GoogleClouddeployAutomationRulesTimedPromoteReleaseRule getTimedPromoteReleaseRule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule">GoogleClouddeployAutomationRulesTimedPromoteReleaseRule</a>

timed_promote_release_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#timed_promote_release_rule GoogleClouddeployAutomation#timed_promote_release_rule}

---

### GoogleClouddeployAutomationRulesAdvanceRolloutRule <a name="GoogleClouddeployAutomationRulesAdvanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesAdvanceRolloutRule;

GoogleClouddeployAutomationRulesAdvanceRolloutRule.builder()
    .id(java.lang.String)
//  .sourcePhases(java.util.List<java.lang.String>)
//  .wait(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.id">id</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.sourcePhases">sourcePhases</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.wait">wait</a></code> | <code>java.lang.String</code> | Optional. How long to wait after a rollout is finished. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourcePhases`<sup>Optional</sup> <a name="sourcePhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.sourcePhases"></a>

```java
public java.util.List<java.lang.String> getSourcePhases();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: '^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#source_phases GoogleClouddeployAutomation#source_phases}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.wait"></a>

```java
public java.lang.String getWait();
```

- *Type:* java.lang.String

Optional. How long to wait after a rollout is finished.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#wait GoogleClouddeployAutomation#wait}

---

### GoogleClouddeployAutomationRulesPromoteReleaseRule <a name="GoogleClouddeployAutomationRulesPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesPromoteReleaseRule;

GoogleClouddeployAutomationRulesPromoteReleaseRule.builder()
    .id(java.lang.String)
//  .destinationPhase(java.lang.String)
//  .destinationTargetId(java.lang.String)
//  .wait(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.id">id</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.destinationPhase">destinationPhase</a></code> | <code>java.lang.String</code> | Optional. The starting phase of the rollout created by this operation. Default to the first phase. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.destinationTargetId">destinationTargetId</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.wait">wait</a></code> | <code>java.lang.String</code> | Optional. How long the release need to be paused until being promoted to the next target. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `destinationPhase`<sup>Optional</sup> <a name="destinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.destinationPhase"></a>

```java
public java.lang.String getDestinationPhase();
```

- *Type:* java.lang.String

Optional. The starting phase of the rollout created by this operation. Default to the first phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#destination_phase GoogleClouddeployAutomation#destination_phase}

---

##### `destinationTargetId`<sup>Optional</sup> <a name="destinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.destinationTargetId"></a>

```java
public java.lang.String getDestinationTargetId();
```

- *Type:* java.lang.String

Optional.

The ID of the stage in the pipeline to which this 'Release' is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. * "@next", the next target in the promotion sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#destination_target_id GoogleClouddeployAutomation#destination_target_id}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.wait"></a>

```java
public java.lang.String getWait();
```

- *Type:* java.lang.String

Optional. How long the release need to be paused until being promoted to the next target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#wait GoogleClouddeployAutomation#wait}

---

### GoogleClouddeployAutomationRulesRepairRolloutRule <a name="GoogleClouddeployAutomationRulesRepairRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesRepairRolloutRule;

GoogleClouddeployAutomationRulesRepairRolloutRule.builder()
    .id(java.lang.String)
//  .jobs(java.util.List<java.lang.String>)
//  .phases(java.util.List<java.lang.String>)
//  .repairPhases(IResolvable)
//  .repairPhases(java.util.List<GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.id">id</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.jobs">jobs</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.phases">phases</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.repairPhases">repairPhases</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>></code> | repair_phases block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobs`<sup>Optional</sup> <a name="jobs" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.jobs"></a>

```java
public java.util.List<java.lang.String> getJobs();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Jobs to repair. Proceeds only after job name matched any one in the list, or for all jobs if unspecified or empty. The phase that includes the job must match the phase ID specified in sourcePhase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: ^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#jobs GoogleClouddeployAutomation#jobs}

---

##### `phases`<sup>Optional</sup> <a name="phases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.phases"></a>

```java
public java.util.List<java.lang.String> getPhases();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Phases within which jobs are subject to automatic repair actions on failure. Proceeds only after phase name matched any one in the list, or for all phases if unspecified. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: ^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#phases GoogleClouddeployAutomation#phases}

---

##### `repairPhases`<sup>Optional</sup> <a name="repairPhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.repairPhases"></a>

```java
public java.lang.Object getRepairPhases();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>>

repair_phases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#repair_phases GoogleClouddeployAutomation#repair_phases}

---

### GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases;

GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases.builder()
//  .retry(GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry)
//  .rollback(GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.retry">retry</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.rollback">rollback</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a></code> | rollback block. |

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.retry"></a>

```java
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry getRetry();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

retry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#retry GoogleClouddeployAutomation#retry}

---

##### `rollback`<sup>Optional</sup> <a name="rollback" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.rollback"></a>

```java
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback getRollback();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

rollback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#rollback GoogleClouddeployAutomation#rollback}

---

### GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry;

GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.builder()
    .attempts(java.lang.String)
//  .backoffMode(java.lang.String)
//  .wait(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.attempts">attempts</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.backoffMode">backoffMode</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.wait">wait</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.attempts"></a>

```java
public java.lang.String getAttempts();
```

- *Type:* java.lang.String

Required.

Total number of retries. Retry is skipped if set to 0; The minimum value is 1, and the maximum value is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#attempts GoogleClouddeployAutomation#attempts}

---

##### `backoffMode`<sup>Optional</sup> <a name="backoffMode" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.backoffMode"></a>

```java
public java.lang.String getBackoffMode();
```

- *Type:* java.lang.String

Optional.

The pattern of how wait time will be increased. Default is linear. Backoff mode will be ignored if wait is 0. Possible values: ["BACKOFF_MODE_UNSPECIFIED", "BACKOFF_MODE_LINEAR", "BACKOFF_MODE_EXPONENTIAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#backoff_mode GoogleClouddeployAutomation#backoff_mode}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.wait"></a>

```java
public java.lang.String getWait();
```

- *Type:* java.lang.String

Optional.

How long to wait for the first retry. Default is 0, and the maximum value is 14d. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#wait GoogleClouddeployAutomation#wait}

---

### GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback;

GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.builder()
//  .destinationPhase(java.lang.String)
//  .disableRollbackIfRolloutPending(java.lang.Boolean)
//  .disableRollbackIfRolloutPending(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.destinationPhase">destinationPhase</a></code> | <code>java.lang.String</code> | Optional. The starting phase ID for the Rollout. If unspecified, the Rollout will start in the stable phase. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.disableRollbackIfRolloutPending">disableRollbackIfRolloutPending</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. If pending rollout exists on the target, the rollback operation will be aborted. |

---

##### `destinationPhase`<sup>Optional</sup> <a name="destinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.destinationPhase"></a>

```java
public java.lang.String getDestinationPhase();
```

- *Type:* java.lang.String

Optional. The starting phase ID for the Rollout. If unspecified, the Rollout will start in the stable phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#destination_phase GoogleClouddeployAutomation#destination_phase}

---

##### `disableRollbackIfRolloutPending`<sup>Optional</sup> <a name="disableRollbackIfRolloutPending" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.disableRollbackIfRolloutPending"></a>

```java
public java.lang.Object getDisableRollbackIfRolloutPending();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. If pending rollout exists on the target, the rollback operation will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#disable_rollback_if_rollout_pending GoogleClouddeployAutomation#disable_rollback_if_rollout_pending}

---

### GoogleClouddeployAutomationRulesTimedPromoteReleaseRule <a name="GoogleClouddeployAutomationRulesTimedPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule;

GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.builder()
    .id(java.lang.String)
    .schedule(java.lang.String)
    .timeZone(java.lang.String)
//  .destinationPhase(java.lang.String)
//  .destinationTargetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.id">id</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Required. Schedule in crontab format. e.g. '0 9 * * 1' for every Monday at 9am. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Required. The time zone in IANA format IANA Time Zone Database (e.g. America/New_York). |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationPhase">destinationPhase</a></code> | <code>java.lang.String</code> | Optional. The starting phase of the rollout created by this rule. Default to the first phase. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationTargetId">destinationTargetId</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Required. Schedule in crontab format. e.g. '0 9 * * 1' for every Monday at 9am.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#schedule GoogleClouddeployAutomation#schedule}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Required. The time zone in IANA format IANA Time Zone Database (e.g. America/New_York).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#time_zone GoogleClouddeployAutomation#time_zone}

---

##### `destinationPhase`<sup>Optional</sup> <a name="destinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationPhase"></a>

```java
public java.lang.String getDestinationPhase();
```

- *Type:* java.lang.String

Optional. The starting phase of the rollout created by this rule. Default to the first phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#destination_phase GoogleClouddeployAutomation#destination_phase}

---

##### `destinationTargetId`<sup>Optional</sup> <a name="destinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationTargetId"></a>

```java
public java.lang.String getDestinationTargetId();
```

- *Type:* java.lang.String

Optional.

The ID of the stage in the pipeline to which this Release is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following:

* The last segment of a target name
* "@next", the next target in the promotion sequence"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#destination_target_id GoogleClouddeployAutomation#destination_target_id}

---

### GoogleClouddeployAutomationSelector <a name="GoogleClouddeployAutomationSelector" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationSelector;

GoogleClouddeployAutomationSelector.builder()
    .targets(IResolvable)
    .targets(java.util.List<GoogleClouddeployAutomationSelectorTargets>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector.property.targets">targets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>></code> | targets block. |

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector.property.targets"></a>

```java
public java.lang.Object getTargets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>>

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#targets GoogleClouddeployAutomation#targets}

---

### GoogleClouddeployAutomationSelectorTargets <a name="GoogleClouddeployAutomationSelectorTargets" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationSelectorTargets;

GoogleClouddeployAutomationSelectorTargets.builder()
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.property.id">id</a></code> | <code>java.lang.String</code> | ID of the 'Target'. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Target labels. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

ID of the 'Target'.

The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine which target is being referred to * "*", all targets in a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Target labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#labels GoogleClouddeployAutomation#labels}

---

### GoogleClouddeployAutomationTimeouts <a name="GoogleClouddeployAutomationTimeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationTimeouts;

GoogleClouddeployAutomationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#create GoogleClouddeployAutomation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#delete GoogleClouddeployAutomation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#update GoogleClouddeployAutomation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#create GoogleClouddeployAutomation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#delete GoogleClouddeployAutomation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_clouddeploy_automation#update GoogleClouddeployAutomation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference <a name="GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference;

new GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetSourcePhases">resetSourcePhases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetWait">resetWait</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourcePhases` <a name="resetSourcePhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetSourcePhases"></a>

```java
public void resetSourcePhases()
```

##### `resetWait` <a name="resetWait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetWait"></a>

```java
public void resetWait()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhasesInput">sourcePhasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.waitInput">waitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhases">sourcePhases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.wait">wait</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `sourcePhasesInput`<sup>Optional</sup> <a name="sourcePhasesInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhasesInput"></a>

```java
public java.util.List<java.lang.String> getSourcePhasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.waitInput"></a>

```java
public java.lang.String getWaitInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sourcePhases`<sup>Required</sup> <a name="sourcePhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhases"></a>

```java
public java.util.List<java.lang.String> getSourcePhases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.wait"></a>

```java
public java.lang.String getWait();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployAutomationRulesAdvanceRolloutRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a>

---


### GoogleClouddeployAutomationRulesList <a name="GoogleClouddeployAutomationRulesList" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesList;

new GoogleClouddeployAutomationRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.get"></a>

```java
public GoogleClouddeployAutomationRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>>

---


### GoogleClouddeployAutomationRulesOutputReference <a name="GoogleClouddeployAutomationRulesOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesOutputReference;

new GoogleClouddeployAutomationRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule">putAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putPromoteReleaseRule">putPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putRepairRolloutRule">putRepairRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule">putTimedPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetAdvanceRolloutRule">resetAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetPromoteReleaseRule">resetPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetRepairRolloutRule">resetRepairRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetTimedPromoteReleaseRule">resetTimedPromoteReleaseRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvanceRolloutRule` <a name="putAdvanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule"></a>

```java
public void putAdvanceRolloutRule(GoogleClouddeployAutomationRulesAdvanceRolloutRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a>

---

##### `putPromoteReleaseRule` <a name="putPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putPromoteReleaseRule"></a>

```java
public void putPromoteReleaseRule(GoogleClouddeployAutomationRulesPromoteReleaseRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putPromoteReleaseRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a>

---

##### `putRepairRolloutRule` <a name="putRepairRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putRepairRolloutRule"></a>

```java
public void putRepairRolloutRule(GoogleClouddeployAutomationRulesRepairRolloutRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putRepairRolloutRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule">GoogleClouddeployAutomationRulesRepairRolloutRule</a>

---

##### `putTimedPromoteReleaseRule` <a name="putTimedPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule"></a>

```java
public void putTimedPromoteReleaseRule(GoogleClouddeployAutomationRulesTimedPromoteReleaseRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule">GoogleClouddeployAutomationRulesTimedPromoteReleaseRule</a>

---

##### `resetAdvanceRolloutRule` <a name="resetAdvanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetAdvanceRolloutRule"></a>

```java
public void resetAdvanceRolloutRule()
```

##### `resetPromoteReleaseRule` <a name="resetPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetPromoteReleaseRule"></a>

```java
public void resetPromoteReleaseRule()
```

##### `resetRepairRolloutRule` <a name="resetRepairRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetRepairRolloutRule"></a>

```java
public void resetRepairRolloutRule()
```

##### `resetTimedPromoteReleaseRule` <a name="resetTimedPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetTimedPromoteReleaseRule"></a>

```java
public void resetTimedPromoteReleaseRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.advanceRolloutRule">advanceRolloutRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference">GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.promoteReleaseRule">promoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference">GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.repairRolloutRule">repairRolloutRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference">GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRule">timedPromoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference">GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.advanceRolloutRuleInput">advanceRolloutRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.promoteReleaseRuleInput">promoteReleaseRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.repairRolloutRuleInput">repairRolloutRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule">GoogleClouddeployAutomationRulesRepairRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRuleInput">timedPromoteReleaseRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule">GoogleClouddeployAutomationRulesTimedPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advanceRolloutRule`<sup>Required</sup> <a name="advanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.advanceRolloutRule"></a>

```java
public GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference getAdvanceRolloutRule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference">GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference</a>

---

##### `promoteReleaseRule`<sup>Required</sup> <a name="promoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.promoteReleaseRule"></a>

```java
public GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference getPromoteReleaseRule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference">GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference</a>

---

##### `repairRolloutRule`<sup>Required</sup> <a name="repairRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.repairRolloutRule"></a>

```java
public GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference getRepairRolloutRule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference">GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference</a>

---

##### `timedPromoteReleaseRule`<sup>Required</sup> <a name="timedPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRule"></a>

```java
public GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference getTimedPromoteReleaseRule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference">GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference</a>

---

##### `advanceRolloutRuleInput`<sup>Optional</sup> <a name="advanceRolloutRuleInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.advanceRolloutRuleInput"></a>

```java
public GoogleClouddeployAutomationRulesAdvanceRolloutRule getAdvanceRolloutRuleInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a>

---

##### `promoteReleaseRuleInput`<sup>Optional</sup> <a name="promoteReleaseRuleInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.promoteReleaseRuleInput"></a>

```java
public GoogleClouddeployAutomationRulesPromoteReleaseRule getPromoteReleaseRuleInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a>

---

##### `repairRolloutRuleInput`<sup>Optional</sup> <a name="repairRolloutRuleInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.repairRolloutRuleInput"></a>

```java
public GoogleClouddeployAutomationRulesRepairRolloutRule getRepairRolloutRuleInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule">GoogleClouddeployAutomationRulesRepairRolloutRule</a>

---

##### `timedPromoteReleaseRuleInput`<sup>Optional</sup> <a name="timedPromoteReleaseRuleInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRuleInput"></a>

```java
public GoogleClouddeployAutomationRulesTimedPromoteReleaseRule getTimedPromoteReleaseRuleInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule">GoogleClouddeployAutomationRulesTimedPromoteReleaseRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>

---


### GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference <a name="GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference;

new GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationPhase">resetDestinationPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationTargetId">resetDestinationTargetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetWait">resetWait</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPhase` <a name="resetDestinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationPhase"></a>

```java
public void resetDestinationPhase()
```

##### `resetDestinationTargetId` <a name="resetDestinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationTargetId"></a>

```java
public void resetDestinationTargetId()
```

##### `resetWait` <a name="resetWait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetWait"></a>

```java
public void resetWait()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhaseInput">destinationPhaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetIdInput">destinationTargetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.waitInput">waitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhase">destinationPhase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetId">destinationTargetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.wait">wait</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPhaseInput`<sup>Optional</sup> <a name="destinationPhaseInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhaseInput"></a>

```java
public java.lang.String getDestinationPhaseInput();
```

- *Type:* java.lang.String

---

##### `destinationTargetIdInput`<sup>Optional</sup> <a name="destinationTargetIdInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetIdInput"></a>

```java
public java.lang.String getDestinationTargetIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.waitInput"></a>

```java
public java.lang.String getWaitInput();
```

- *Type:* java.lang.String

---

##### `destinationPhase`<sup>Required</sup> <a name="destinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhase"></a>

```java
public java.lang.String getDestinationPhase();
```

- *Type:* java.lang.String

---

##### `destinationTargetId`<sup>Required</sup> <a name="destinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetId"></a>

```java
public java.lang.String getDestinationTargetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.wait"></a>

```java
public java.lang.String getWait();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployAutomationRulesPromoteReleaseRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a>

---


### GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference;

new GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.putRepairPhases">putRepairPhases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetJobs">resetJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetPhases">resetPhases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetRepairPhases">resetRepairPhases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRepairPhases` <a name="putRepairPhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.putRepairPhases"></a>

```java
public void putRepairPhases(IResolvable OR java.util.List<GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.putRepairPhases.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>>

---

##### `resetJobs` <a name="resetJobs" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetJobs"></a>

```java
public void resetJobs()
```

##### `resetPhases` <a name="resetPhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetPhases"></a>

```java
public void resetPhases()
```

##### `resetRepairPhases` <a name="resetRepairPhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetRepairPhases"></a>

```java
public void resetRepairPhases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhases">repairPhases</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobsInput">jobsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phasesInput">phasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhasesInput">repairPhasesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobs">jobs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phases">phases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule">GoogleClouddeployAutomationRulesRepairRolloutRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repairPhases`<sup>Required</sup> <a name="repairPhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhases"></a>

```java
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList getRepairPhases();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jobsInput`<sup>Optional</sup> <a name="jobsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobsInput"></a>

```java
public java.util.List<java.lang.String> getJobsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phasesInput`<sup>Optional</sup> <a name="phasesInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phasesInput"></a>

```java
public java.util.List<java.lang.String> getPhasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repairPhasesInput`<sup>Optional</sup> <a name="repairPhasesInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhasesInput"></a>

```java
public java.lang.Object getRepairPhasesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobs`<sup>Required</sup> <a name="jobs" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobs"></a>

```java
public java.util.List<java.lang.String> getJobs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phases`<sup>Required</sup> <a name="phases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phases"></a>

```java
public java.util.List<java.lang.String> getPhases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployAutomationRulesRepairRolloutRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule">GoogleClouddeployAutomationRulesRepairRolloutRule</a>

---


### GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList;

new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.get"></a>

```java
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>>

---


### GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference;

new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRollback">putRollback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRollback">resetRollback</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetry` <a name="putRetry" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRetry"></a>

```java
public void putRetry(GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

---

##### `putRollback` <a name="putRollback" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRollback"></a>

```java
public void putRollback(GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRollback.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

---

##### `resetRetry` <a name="resetRetry" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRetry"></a>

```java
public void resetRetry()
```

##### `resetRollback` <a name="resetRollback" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRollback"></a>

```java
public void resetRollback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retry">retry</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollback">rollback</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retryInput">retryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollbackInput">rollbackInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retry"></a>

```java
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference getRetry();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference</a>

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollback"></a>

```java
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference getRollback();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference</a>

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retryInput"></a>

```java
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry getRetryInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

---

##### `rollbackInput`<sup>Optional</sup> <a name="rollbackInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollbackInput"></a>

```java
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback getRollbackInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases</a>

---


### GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference;

new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetBackoffMode">resetBackoffMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetWait">resetWait</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackoffMode` <a name="resetBackoffMode" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetBackoffMode"></a>

```java
public void resetBackoffMode()
```

##### `resetWait` <a name="resetWait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetWait"></a>

```java
public void resetWait()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attemptsInput">attemptsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffModeInput">backoffModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.waitInput">waitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attempts">attempts</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffMode">backoffMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.wait">wait</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attemptsInput`<sup>Optional</sup> <a name="attemptsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attemptsInput"></a>

```java
public java.lang.String getAttemptsInput();
```

- *Type:* java.lang.String

---

##### `backoffModeInput`<sup>Optional</sup> <a name="backoffModeInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffModeInput"></a>

```java
public java.lang.String getBackoffModeInput();
```

- *Type:* java.lang.String

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.waitInput"></a>

```java
public java.lang.String getWaitInput();
```

- *Type:* java.lang.String

---

##### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attempts"></a>

```java
public java.lang.String getAttempts();
```

- *Type:* java.lang.String

---

##### `backoffMode`<sup>Required</sup> <a name="backoffMode" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffMode"></a>

```java
public java.lang.String getBackoffMode();
```

- *Type:* java.lang.String

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.wait"></a>

```java
public java.lang.String getWait();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

---


### GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference;

new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDestinationPhase">resetDestinationPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDisableRollbackIfRolloutPending">resetDisableRollbackIfRolloutPending</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPhase` <a name="resetDestinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDestinationPhase"></a>

```java
public void resetDestinationPhase()
```

##### `resetDisableRollbackIfRolloutPending` <a name="resetDisableRollbackIfRolloutPending" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDisableRollbackIfRolloutPending"></a>

```java
public void resetDisableRollbackIfRolloutPending()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhaseInput">destinationPhaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPendingInput">disableRollbackIfRolloutPendingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhase">destinationPhase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPending">disableRollbackIfRolloutPending</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPhaseInput`<sup>Optional</sup> <a name="destinationPhaseInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhaseInput"></a>

```java
public java.lang.String getDestinationPhaseInput();
```

- *Type:* java.lang.String

---

##### `disableRollbackIfRolloutPendingInput`<sup>Optional</sup> <a name="disableRollbackIfRolloutPendingInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPendingInput"></a>

```java
public java.lang.Object getDisableRollbackIfRolloutPendingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `destinationPhase`<sup>Required</sup> <a name="destinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhase"></a>

```java
public java.lang.String getDestinationPhase();
```

- *Type:* java.lang.String

---

##### `disableRollbackIfRolloutPending`<sup>Required</sup> <a name="disableRollbackIfRolloutPending" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPending"></a>

```java
public java.lang.Object getDisableRollbackIfRolloutPending();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

---


### GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference <a name="GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference;

new GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationPhase">resetDestinationPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationTargetId">resetDestinationTargetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPhase` <a name="resetDestinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationPhase"></a>

```java
public void resetDestinationPhase()
```

##### `resetDestinationTargetId` <a name="resetDestinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationTargetId"></a>

```java
public void resetDestinationTargetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhaseInput">destinationPhaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetIdInput">destinationTargetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhase">destinationPhase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetId">destinationTargetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule">GoogleClouddeployAutomationRulesTimedPromoteReleaseRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPhaseInput`<sup>Optional</sup> <a name="destinationPhaseInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhaseInput"></a>

```java
public java.lang.String getDestinationPhaseInput();
```

- *Type:* java.lang.String

---

##### `destinationTargetIdInput`<sup>Optional</sup> <a name="destinationTargetIdInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetIdInput"></a>

```java
public java.lang.String getDestinationTargetIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `destinationPhase`<sup>Required</sup> <a name="destinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhase"></a>

```java
public java.lang.String getDestinationPhase();
```

- *Type:* java.lang.String

---

##### `destinationTargetId`<sup>Required</sup> <a name="destinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetId"></a>

```java
public java.lang.String getDestinationTargetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployAutomationRulesTimedPromoteReleaseRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule">GoogleClouddeployAutomationRulesTimedPromoteReleaseRule</a>

---


### GoogleClouddeployAutomationSelectorOutputReference <a name="GoogleClouddeployAutomationSelectorOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationSelectorOutputReference;

new GoogleClouddeployAutomationSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.putTargets">putTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargets` <a name="putTargets" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.putTargets"></a>

```java
public void putTargets(IResolvable OR java.util.List<GoogleClouddeployAutomationSelectorTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.putTargets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList">GoogleClouddeployAutomationSelectorTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.targetsInput">targetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.targets"></a>

```java
public GoogleClouddeployAutomationSelectorTargetsList getTargets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList">GoogleClouddeployAutomationSelectorTargetsList</a>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.targetsInput"></a>

```java
public java.lang.Object getTargetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployAutomationSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a>

---


### GoogleClouddeployAutomationSelectorTargetsList <a name="GoogleClouddeployAutomationSelectorTargetsList" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationSelectorTargetsList;

new GoogleClouddeployAutomationSelectorTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.get"></a>

```java
public GoogleClouddeployAutomationSelectorTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>>

---


### GoogleClouddeployAutomationSelectorTargetsOutputReference <a name="GoogleClouddeployAutomationSelectorTargetsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationSelectorTargetsOutputReference;

new GoogleClouddeployAutomationSelectorTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resetLabels"></a>

```java
public void resetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>

---


### GoogleClouddeployAutomationTimeoutsOutputReference <a name="GoogleClouddeployAutomationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_automation.GoogleClouddeployAutomationTimeoutsOutputReference;

new GoogleClouddeployAutomationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a>

---




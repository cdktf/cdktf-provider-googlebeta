# `googleClouddeployDeployPolicy` Submodule <a name="`googleClouddeployDeployPolicy` Submodule" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployDeployPolicy <a name="GoogleClouddeployDeployPolicy" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy google_clouddeploy_deploy_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicy;

GoogleClouddeployDeployPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .rules(IResolvable)
    .rules(java.util.List<GoogleClouddeployDeployPolicyRules>)
    .selectors(IResolvable)
    .selectors(java.util.List<GoogleClouddeployDeployPolicySelectors>)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .suspended(java.lang.Boolean)
//  .suspended(IResolvable)
//  .timeouts(GoogleClouddeployDeployPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the 'DeployPolicy'. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules">GoogleClouddeployDeployPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.selectors">selectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors">GoogleClouddeployDeployPolicySelectors</a>></code> | selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of the 'DeployPolicy'. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#id GoogleClouddeployDeployPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#project GoogleClouddeployDeployPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. When suspended, the policy will not prevent actions from occurring, even if the action violates the policy. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts">GoogleClouddeployDeployPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#location GoogleClouddeployDeployPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the 'DeployPolicy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#name GoogleClouddeployDeployPolicy#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules">GoogleClouddeployDeployPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#rules GoogleClouddeployDeployPolicy#rules}

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.selectors"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors">GoogleClouddeployDeployPolicySelectors</a>>

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#selectors GoogleClouddeployDeployPolicy#selectors}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash ('/'). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ('[a-z0-9A-Z]') with dashes ('-'), underscores ('_'), dots ('.'), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots('.'), not longer than 253 characters in total, followed by a slash ('/'). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#annotations GoogleClouddeployDeployPolicy#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. Description of the 'DeployPolicy'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#description GoogleClouddeployDeployPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#id GoogleClouddeployDeployPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#labels GoogleClouddeployDeployPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#project GoogleClouddeployDeployPolicy#project}.

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.suspended"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. When suspended, the policy will not prevent actions from occurring, even if the action violates the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#suspended GoogleClouddeployDeployPolicy#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts">GoogleClouddeployDeployPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#timeouts GoogleClouddeployDeployPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.putSelectors">putSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetSuspended">resetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<GoogleClouddeployDeployPolicyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules">GoogleClouddeployDeployPolicyRules</a>>

---

##### `putSelectors` <a name="putSelectors" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.putSelectors"></a>

```java
public void putSelectors(IResolvable OR java.util.List<GoogleClouddeployDeployPolicySelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.putSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors">GoogleClouddeployDeployPolicySelectors</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleClouddeployDeployPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts">GoogleClouddeployDeployPolicyTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetSuspended` <a name="resetSuspended" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetSuspended"></a>

```java
public void resetSuspended()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleClouddeployDeployPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicy;

GoogleClouddeployDeployPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicy;

GoogleClouddeployDeployPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicy;

GoogleClouddeployDeployPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicy;

GoogleClouddeployDeployPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleClouddeployDeployPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleClouddeployDeployPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleClouddeployDeployPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleClouddeployDeployPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployDeployPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList">GoogleClouddeployDeployPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList">GoogleClouddeployDeployPolicySelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference">GoogleClouddeployDeployPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules">GoogleClouddeployDeployPolicyRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.selectorsInput">selectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors">GoogleClouddeployDeployPolicySelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.suspendedInput">suspendedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts">GoogleClouddeployDeployPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.rules"></a>

```java
public GoogleClouddeployDeployPolicyRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList">GoogleClouddeployDeployPolicyRulesList</a>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.selectors"></a>

```java
public GoogleClouddeployDeployPolicySelectorsList getSelectors();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList">GoogleClouddeployDeployPolicySelectorsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.timeouts"></a>

```java
public GoogleClouddeployDeployPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference">GoogleClouddeployDeployPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules">GoogleClouddeployDeployPolicyRules</a>>

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.selectorsInput"></a>

```java
public java.lang.Object getSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors">GoogleClouddeployDeployPolicySelectors</a>>

---

##### `suspendedInput`<sup>Optional</sup> <a name="suspendedInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.suspendedInput"></a>

```java
public java.lang.Object getSuspendedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts">GoogleClouddeployDeployPolicyTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.suspended"></a>

```java
public java.lang.Object getSuspended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployDeployPolicyConfig <a name="GoogleClouddeployDeployPolicyConfig" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyConfig;

GoogleClouddeployDeployPolicyConfig.builder()
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
    .name(java.lang.String)
    .rules(IResolvable)
    .rules(java.util.List<GoogleClouddeployDeployPolicyRules>)
    .selectors(IResolvable)
    .selectors(java.util.List<GoogleClouddeployDeployPolicySelectors>)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .suspended(java.lang.Boolean)
//  .suspended(IResolvable)
//  .timeouts(GoogleClouddeployDeployPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the 'DeployPolicy'. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules">GoogleClouddeployDeployPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.selectors">selectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors">GoogleClouddeployDeployPolicySelectors</a>></code> | selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of the 'DeployPolicy'. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#id GoogleClouddeployDeployPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#project GoogleClouddeployDeployPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. When suspended, the policy will not prevent actions from occurring, even if the action violates the policy. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts">GoogleClouddeployDeployPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#location GoogleClouddeployDeployPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the 'DeployPolicy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#name GoogleClouddeployDeployPolicy#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules">GoogleClouddeployDeployPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#rules GoogleClouddeployDeployPolicy#rules}

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.selectors"></a>

```java
public java.lang.Object getSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors">GoogleClouddeployDeployPolicySelectors</a>>

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#selectors GoogleClouddeployDeployPolicy#selectors}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash ('/'). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ('[a-z0-9A-Z]') with dashes ('-'), underscores ('_'), dots ('.'), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots('.'), not longer than 253 characters in total, followed by a slash ('/'). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#annotations GoogleClouddeployDeployPolicy#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. Description of the 'DeployPolicy'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#description GoogleClouddeployDeployPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#id GoogleClouddeployDeployPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#labels GoogleClouddeployDeployPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#project GoogleClouddeployDeployPolicy#project}.

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.suspended"></a>

```java
public java.lang.Object getSuspended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. When suspended, the policy will not prevent actions from occurring, even if the action violates the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#suspended GoogleClouddeployDeployPolicy#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyConfig.property.timeouts"></a>

```java
public GoogleClouddeployDeployPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts">GoogleClouddeployDeployPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#timeouts GoogleClouddeployDeployPolicy#timeouts}

---

### GoogleClouddeployDeployPolicyRules <a name="GoogleClouddeployDeployPolicyRules" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRules;

GoogleClouddeployDeployPolicyRules.builder()
//  .rolloutRestriction(GoogleClouddeployDeployPolicyRulesRolloutRestriction)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules.property.rolloutRestriction">rolloutRestriction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction">GoogleClouddeployDeployPolicyRulesRolloutRestriction</a></code> | rollout_restriction block. |

---

##### `rolloutRestriction`<sup>Optional</sup> <a name="rolloutRestriction" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules.property.rolloutRestriction"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestriction getRolloutRestriction();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction">GoogleClouddeployDeployPolicyRulesRolloutRestriction</a>

rollout_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#rollout_restriction GoogleClouddeployDeployPolicy#rollout_restriction}

---

### GoogleClouddeployDeployPolicyRulesRolloutRestriction <a name="GoogleClouddeployDeployPolicyRulesRolloutRestriction" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestriction;

GoogleClouddeployDeployPolicyRulesRolloutRestriction.builder()
    .id(java.lang.String)
//  .actions(java.util.List<java.lang.String>)
//  .invokers(java.util.List<java.lang.String>)
//  .timeWindows(GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction.property.id">id</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction.property.invokers">invokers</a></code> | <code>java.util.List<java.lang.String></code> | Optional. What invoked the action. If left empty, all invoker types will be restricted. Possible values: ["USER", "DEPLOY_AUTOMATION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction.property.timeWindows">timeWindows</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows</a></code> | time_windows block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Required.

ID of the rule. This id must be unique in the 'DeployPolicy' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#id GoogleClouddeployDeployPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Rollout actions to be restricted as part of the policy. If left empty, all actions will be restricted. Possible values: ["ADVANCE", "APPROVE", "CANCEL", "CREATE", "IGNORE_JOB", "RETRY_JOB", "ROLLBACK", "TERMINATE_JOBRUN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#actions GoogleClouddeployDeployPolicy#actions}

---

##### `invokers`<sup>Optional</sup> <a name="invokers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction.property.invokers"></a>

```java
public java.util.List<java.lang.String> getInvokers();
```

- *Type:* java.util.List<java.lang.String>

Optional. What invoked the action. If left empty, all invoker types will be restricted. Possible values: ["USER", "DEPLOY_AUTOMATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#invokers GoogleClouddeployDeployPolicy#invokers}

---

##### `timeWindows`<sup>Optional</sup> <a name="timeWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction.property.timeWindows"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows getTimeWindows();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows</a>

time_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#time_windows GoogleClouddeployDeployPolicy#time_windows}

---

### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows;

GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows.builder()
    .timeZone(java.lang.String)
//  .oneTimeWindows(IResolvable)
//  .oneTimeWindows(java.util.List<GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows>)
//  .weeklyWindows(IResolvable)
//  .weeklyWindows(java.util.List<GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Required. The time zone in IANA format IANA Time Zone Database (e.g. America/New_York). |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows.property.oneTimeWindows">oneTimeWindows</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows</a>></code> | one_time_windows block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows.property.weeklyWindows">weeklyWindows</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows</a>></code> | weekly_windows block. |

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Required. The time zone in IANA format IANA Time Zone Database (e.g. America/New_York).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#time_zone GoogleClouddeployDeployPolicy#time_zone}

---

##### `oneTimeWindows`<sup>Optional</sup> <a name="oneTimeWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows.property.oneTimeWindows"></a>

```java
public java.lang.Object getOneTimeWindows();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows</a>>

one_time_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#one_time_windows GoogleClouddeployDeployPolicy#one_time_windows}

---

##### `weeklyWindows`<sup>Optional</sup> <a name="weeklyWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows.property.weeklyWindows"></a>

```java
public java.lang.Object getWeeklyWindows();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows</a>>

weekly_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#weekly_windows GoogleClouddeployDeployPolicy#weekly_windows}

---

### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows;

GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows.builder()
    .endDate(GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate)
    .endTime(GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime)
    .startDate(GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate)
    .startTime(GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate</a></code> | end_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows.property.endTime">endTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime</a></code> | end_time block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime</a></code> | start_time block. |

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows.property.endDate"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate getEndDate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#end_date GoogleClouddeployDeployPolicy#end_date}

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows.property.endTime"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime getEndTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime</a>

end_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#end_time GoogleClouddeployDeployPolicy#end_time}

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows.property.startDate"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate getStartDate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#start_date GoogleClouddeployDeployPolicy#start_date}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows.property.startTime"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#start_time GoogleClouddeployDeployPolicy#start_time}

---

### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate;

GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate.builder()
//  .day(java.lang.Number)
//  .month(java.lang.Number)
//  .year(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate.property.day">day</a></code> | <code>java.lang.Number</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate.property.month">month</a></code> | <code>java.lang.Number</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate.property.year">year</a></code> | <code>java.lang.Number</code> | Year of the date. Must be from 1 to 9999. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#day GoogleClouddeployDeployPolicy#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#month GoogleClouddeployDeployPolicy#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#year GoogleClouddeployDeployPolicy#year}

---

### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime;

GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds, in nanoseconds. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of a minute. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#hours GoogleClouddeployDeployPolicy#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#minutes GoogleClouddeployDeployPolicy#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds, in nanoseconds.

Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#nanos GoogleClouddeployDeployPolicy#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of a minute.

Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#seconds GoogleClouddeployDeployPolicy#seconds}

---

### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate;

GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate.builder()
//  .day(java.lang.Number)
//  .month(java.lang.Number)
//  .year(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate.property.day">day</a></code> | <code>java.lang.Number</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate.property.month">month</a></code> | <code>java.lang.Number</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate.property.year">year</a></code> | <code>java.lang.Number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#day GoogleClouddeployDeployPolicy#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#month GoogleClouddeployDeployPolicy#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#year GoogleClouddeployDeployPolicy#year}

---

### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime;

GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds, in nanoseconds. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of a minute. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#hours GoogleClouddeployDeployPolicy#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#minutes GoogleClouddeployDeployPolicy#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds, in nanoseconds.

Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#nanos GoogleClouddeployDeployPolicy#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of a minute.

Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#seconds GoogleClouddeployDeployPolicy#seconds}

---

### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows;

GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows.builder()
//  .daysOfWeek(java.util.List<java.lang.String>)
//  .endTime(GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime)
//  .startTime(GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows.property.endTime">endTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime</a></code> | end_time block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime</a></code> | start_time block. |

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Days of week. If left empty, all days of the week will be included. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#days_of_week GoogleClouddeployDeployPolicy#days_of_week}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows.property.endTime"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime getEndTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime</a>

end_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#end_time GoogleClouddeployDeployPolicy#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows.property.startTime"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#start_time GoogleClouddeployDeployPolicy#start_time}

---

### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime;

GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds, in nanoseconds. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of a minute. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#hours GoogleClouddeployDeployPolicy#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#minutes GoogleClouddeployDeployPolicy#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds, in nanoseconds.

Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#nanos GoogleClouddeployDeployPolicy#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of a minute.

Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#seconds GoogleClouddeployDeployPolicy#seconds}

---

### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime;

GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds, in nanoseconds. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of a minute. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#hours GoogleClouddeployDeployPolicy#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#minutes GoogleClouddeployDeployPolicy#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds, in nanoseconds.

Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#nanos GoogleClouddeployDeployPolicy#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of a minute.

Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#seconds GoogleClouddeployDeployPolicy#seconds}

---

### GoogleClouddeployDeployPolicySelectors <a name="GoogleClouddeployDeployPolicySelectors" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicySelectors;

GoogleClouddeployDeployPolicySelectors.builder()
//  .deliveryPipeline(GoogleClouddeployDeployPolicySelectorsDeliveryPipeline)
//  .target(GoogleClouddeployDeployPolicySelectorsTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors.property.deliveryPipeline">deliveryPipeline</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipeline">GoogleClouddeployDeployPolicySelectorsDeliveryPipeline</a></code> | delivery_pipeline block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTarget">GoogleClouddeployDeployPolicySelectorsTarget</a></code> | target block. |

---

##### `deliveryPipeline`<sup>Optional</sup> <a name="deliveryPipeline" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors.property.deliveryPipeline"></a>

```java
public GoogleClouddeployDeployPolicySelectorsDeliveryPipeline getDeliveryPipeline();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipeline">GoogleClouddeployDeployPolicySelectorsDeliveryPipeline</a>

delivery_pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#delivery_pipeline GoogleClouddeployDeployPolicy#delivery_pipeline}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors.property.target"></a>

```java
public GoogleClouddeployDeployPolicySelectorsTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTarget">GoogleClouddeployDeployPolicySelectorsTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#target GoogleClouddeployDeployPolicy#target}

---

### GoogleClouddeployDeployPolicySelectorsDeliveryPipeline <a name="GoogleClouddeployDeployPolicySelectorsDeliveryPipeline" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipeline.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicySelectorsDeliveryPipeline;

GoogleClouddeployDeployPolicySelectorsDeliveryPipeline.builder()
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipeline.property.id">id</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipeline.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | DeliveryPipeline labels. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipeline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Optional.

ID of the DeliveryPipeline. The value of this field could be one of the following:

* The last segment of a pipeline name
* "*", all delivery pipelines in a location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#id GoogleClouddeployDeployPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipeline.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

DeliveryPipeline labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#labels GoogleClouddeployDeployPolicy#labels}

---

### GoogleClouddeployDeployPolicySelectorsTarget <a name="GoogleClouddeployDeployPolicySelectorsTarget" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicySelectorsTarget;

GoogleClouddeployDeployPolicySelectorsTarget.builder()
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTarget.property.id">id</a></code> | <code>java.lang.String</code> | ID of the 'Target'. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTarget.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Target labels. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

ID of the 'Target'.

The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine which target is being referred to * "*", all targets in a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#id GoogleClouddeployDeployPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTarget.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Target labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#labels GoogleClouddeployDeployPolicy#labels}

---

### GoogleClouddeployDeployPolicyTimeouts <a name="GoogleClouddeployDeployPolicyTimeouts" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyTimeouts;

GoogleClouddeployDeployPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#create GoogleClouddeployDeployPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#delete GoogleClouddeployDeployPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#update GoogleClouddeployDeployPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#create GoogleClouddeployDeployPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#delete GoogleClouddeployDeployPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_clouddeploy_deploy_policy#update GoogleClouddeployDeployPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployDeployPolicyRulesList <a name="GoogleClouddeployDeployPolicyRulesList" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesList;

new GoogleClouddeployDeployPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.get"></a>

```java
public GoogleClouddeployDeployPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules">GoogleClouddeployDeployPolicyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules">GoogleClouddeployDeployPolicyRules</a>>

---


### GoogleClouddeployDeployPolicyRulesOutputReference <a name="GoogleClouddeployDeployPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesOutputReference;

new GoogleClouddeployDeployPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.putRolloutRestriction">putRolloutRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.resetRolloutRestriction">resetRolloutRestriction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRolloutRestriction` <a name="putRolloutRestriction" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.putRolloutRestriction"></a>

```java
public void putRolloutRestriction(GoogleClouddeployDeployPolicyRulesRolloutRestriction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.putRolloutRestriction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction">GoogleClouddeployDeployPolicyRulesRolloutRestriction</a>

---

##### `resetRolloutRestriction` <a name="resetRolloutRestriction" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.resetRolloutRestriction"></a>

```java
public void resetRolloutRestriction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.property.rolloutRestriction">rolloutRestriction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.property.rolloutRestrictionInput">rolloutRestrictionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction">GoogleClouddeployDeployPolicyRulesRolloutRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules">GoogleClouddeployDeployPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rolloutRestriction`<sup>Required</sup> <a name="rolloutRestriction" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.property.rolloutRestriction"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference getRolloutRestriction();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference</a>

---

##### `rolloutRestrictionInput`<sup>Optional</sup> <a name="rolloutRestrictionInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.property.rolloutRestrictionInput"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestriction getRolloutRestrictionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction">GoogleClouddeployDeployPolicyRulesRolloutRestriction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRules">GoogleClouddeployDeployPolicyRules</a>

---


### GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference;

new GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.putTimeWindows">putTimeWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.resetInvokers">resetInvokers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.resetTimeWindows">resetTimeWindows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimeWindows` <a name="putTimeWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.putTimeWindows"></a>

```java
public void putTimeWindows(GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.putTimeWindows.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows</a>

---

##### `resetActions` <a name="resetActions" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.resetActions"></a>

```java
public void resetActions()
```

##### `resetInvokers` <a name="resetInvokers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.resetInvokers"></a>

```java
public void resetInvokers()
```

##### `resetTimeWindows` <a name="resetTimeWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.resetTimeWindows"></a>

```java
public void resetTimeWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.timeWindows">timeWindows</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.invokersInput">invokersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.timeWindowsInput">timeWindowsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.invokers">invokers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction">GoogleClouddeployDeployPolicyRulesRolloutRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeWindows`<sup>Required</sup> <a name="timeWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.timeWindows"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference getTimeWindows();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `invokersInput`<sup>Optional</sup> <a name="invokersInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.invokersInput"></a>

```java
public java.util.List<java.lang.String> getInvokersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeWindowsInput`<sup>Optional</sup> <a name="timeWindowsInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.timeWindowsInput"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows getTimeWindowsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows</a>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `invokers`<sup>Required</sup> <a name="invokers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.invokers"></a>

```java
public java.util.List<java.lang.String> getInvokers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestriction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestriction">GoogleClouddeployDeployPolicyRulesRolloutRestriction</a>

---


### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference;

new GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetMonth` <a name="resetMonth" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.resetMonth"></a>

```java
public void resetMonth()
```

##### `resetYear` <a name="resetYear" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.resetYear"></a>

```java
public void resetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.yearInput">yearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.yearInput"></a>

```java
public java.lang.Number getYearInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate</a>

---


### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference;

new GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime</a>

---


### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList;

new GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.get"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows</a>>

---


### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference;

new GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.putEndDate">putEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.putEndTime">putEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.putStartDate">putStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndDate` <a name="putEndDate" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.putEndDate"></a>

```java
public void putEndDate(GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate</a>

---

##### `putEndTime` <a name="putEndTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.putEndTime"></a>

```java
public void putEndTime(GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime</a>

---

##### `putStartDate` <a name="putStartDate" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.putStartDate"></a>

```java
public void putStartDate(GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate</a>

---

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.putStartTime"></a>

```java
public void putStartTime(GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.endDateInput">endDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.endTimeInput">endTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.startDateInput">startDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.endDate"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference getEndDate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDateOutputReference</a>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.endTime"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference getEndTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTimeOutputReference</a>

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.startDate"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference getStartDate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.startTime"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference</a>

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.endDateInput"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate getEndDateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndDate</a>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.endTimeInput"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime getEndTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsEndTime</a>

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.startDateInput"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate getStartDateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.startTimeInput"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows</a>

---


### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference;

new GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetMonth` <a name="resetMonth" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.resetMonth"></a>

```java
public void resetMonth()
```

##### `resetYear` <a name="resetYear" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.resetYear"></a>

```java
public void resetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.yearInput">yearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.yearInput"></a>

```java
public java.lang.Number getYearInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDateOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartDate</a>

---


### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference;

new GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTimeOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsStartTime</a>

---


### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference;

new GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.putOneTimeWindows">putOneTimeWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.putWeeklyWindows">putWeeklyWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.resetOneTimeWindows">resetOneTimeWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.resetWeeklyWindows">resetWeeklyWindows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOneTimeWindows` <a name="putOneTimeWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.putOneTimeWindows"></a>

```java
public void putOneTimeWindows(IResolvable OR java.util.List<GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.putOneTimeWindows.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows</a>>

---

##### `putWeeklyWindows` <a name="putWeeklyWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.putWeeklyWindows"></a>

```java
public void putWeeklyWindows(IResolvable OR java.util.List<GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.putWeeklyWindows.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows</a>>

---

##### `resetOneTimeWindows` <a name="resetOneTimeWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.resetOneTimeWindows"></a>

```java
public void resetOneTimeWindows()
```

##### `resetWeeklyWindows` <a name="resetWeeklyWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.resetWeeklyWindows"></a>

```java
public void resetWeeklyWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.oneTimeWindows">oneTimeWindows</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.weeklyWindows">weeklyWindows</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.oneTimeWindowsInput">oneTimeWindowsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.weeklyWindowsInput">weeklyWindowsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oneTimeWindows`<sup>Required</sup> <a name="oneTimeWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.oneTimeWindows"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList getOneTimeWindows();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindowsList</a>

---

##### `weeklyWindows`<sup>Required</sup> <a name="weeklyWindows" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.weeklyWindows"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList getWeeklyWindows();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList</a>

---

##### `oneTimeWindowsInput`<sup>Optional</sup> <a name="oneTimeWindowsInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.oneTimeWindowsInput"></a>

```java
public java.lang.Object getOneTimeWindowsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOneTimeWindows</a>>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `weeklyWindowsInput`<sup>Optional</sup> <a name="weeklyWindowsInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.weeklyWindowsInput"></a>

```java
public java.lang.Object getWeeklyWindowsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows</a>>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindows</a>

---


### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference;

new GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime</a>

---


### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList;

new GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.get"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows</a>>

---


### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference;

new GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.putEndTime">putEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndTime` <a name="putEndTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.putEndTime"></a>

```java
public void putEndTime(GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime</a>

---

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.putStartTime"></a>

```java
public void putStartTime(GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime</a>

---

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.endTimeInput">endTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.endTime"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference getEndTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTimeOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.startTime"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference</a>

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.endTimeInput"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime getEndTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsEndTime</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.startTimeInput"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime</a>

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindows</a>

---


### GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference <a name="GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference;

new GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTimeOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime">GoogleClouddeployDeployPolicyRulesRolloutRestrictionTimeWindowsWeeklyWindowsStartTime</a>

---


### GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference <a name="GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference;

new GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.resetLabels"></a>

```java
public void resetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipeline">GoogleClouddeployDeployPolicySelectorsDeliveryPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployDeployPolicySelectorsDeliveryPipeline getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipeline">GoogleClouddeployDeployPolicySelectorsDeliveryPipeline</a>

---


### GoogleClouddeployDeployPolicySelectorsList <a name="GoogleClouddeployDeployPolicySelectorsList" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicySelectorsList;

new GoogleClouddeployDeployPolicySelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.get"></a>

```java
public GoogleClouddeployDeployPolicySelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors">GoogleClouddeployDeployPolicySelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors">GoogleClouddeployDeployPolicySelectors</a>>

---


### GoogleClouddeployDeployPolicySelectorsOutputReference <a name="GoogleClouddeployDeployPolicySelectorsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicySelectorsOutputReference;

new GoogleClouddeployDeployPolicySelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.putDeliveryPipeline">putDeliveryPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.resetDeliveryPipeline">resetDeliveryPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeliveryPipeline` <a name="putDeliveryPipeline" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.putDeliveryPipeline"></a>

```java
public void putDeliveryPipeline(GoogleClouddeployDeployPolicySelectorsDeliveryPipeline value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.putDeliveryPipeline.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipeline">GoogleClouddeployDeployPolicySelectorsDeliveryPipeline</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.putTarget"></a>

```java
public void putTarget(GoogleClouddeployDeployPolicySelectorsTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTarget">GoogleClouddeployDeployPolicySelectorsTarget</a>

---

##### `resetDeliveryPipeline` <a name="resetDeliveryPipeline" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.resetDeliveryPipeline"></a>

```java
public void resetDeliveryPipeline()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.property.deliveryPipeline">deliveryPipeline</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference">GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference">GoogleClouddeployDeployPolicySelectorsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.property.deliveryPipelineInput">deliveryPipelineInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipeline">GoogleClouddeployDeployPolicySelectorsDeliveryPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTarget">GoogleClouddeployDeployPolicySelectorsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors">GoogleClouddeployDeployPolicySelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryPipeline`<sup>Required</sup> <a name="deliveryPipeline" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.property.deliveryPipeline"></a>

```java
public GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference getDeliveryPipeline();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference">GoogleClouddeployDeployPolicySelectorsDeliveryPipelineOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.property.target"></a>

```java
public GoogleClouddeployDeployPolicySelectorsTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference">GoogleClouddeployDeployPolicySelectorsTargetOutputReference</a>

---

##### `deliveryPipelineInput`<sup>Optional</sup> <a name="deliveryPipelineInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.property.deliveryPipelineInput"></a>

```java
public GoogleClouddeployDeployPolicySelectorsDeliveryPipeline getDeliveryPipelineInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsDeliveryPipeline">GoogleClouddeployDeployPolicySelectorsDeliveryPipeline</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.property.targetInput"></a>

```java
public GoogleClouddeployDeployPolicySelectorsTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTarget">GoogleClouddeployDeployPolicySelectorsTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectors">GoogleClouddeployDeployPolicySelectors</a>

---


### GoogleClouddeployDeployPolicySelectorsTargetOutputReference <a name="GoogleClouddeployDeployPolicySelectorsTargetOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference;

new GoogleClouddeployDeployPolicySelectorsTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.resetLabels"></a>

```java
public void resetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTarget">GoogleClouddeployDeployPolicySelectorsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTargetOutputReference.property.internalValue"></a>

```java
public GoogleClouddeployDeployPolicySelectorsTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicySelectorsTarget">GoogleClouddeployDeployPolicySelectorsTarget</a>

---


### GoogleClouddeployDeployPolicyTimeoutsOutputReference <a name="GoogleClouddeployDeployPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_clouddeploy_deploy_policy.GoogleClouddeployDeployPolicyTimeoutsOutputReference;

new GoogleClouddeployDeployPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts">GoogleClouddeployDeployPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleClouddeployDeployPolicy.GoogleClouddeployDeployPolicyTimeouts">GoogleClouddeployDeployPolicyTimeouts</a>

---




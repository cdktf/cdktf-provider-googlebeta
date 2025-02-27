# `googleBigqueryDatapolicyDataPolicy` Submodule <a name="`googleBigqueryDatapolicyDataPolicy` Submodule" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDatapolicyDataPolicy <a name="GoogleBigqueryDatapolicyDataPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy google_bigquery_datapolicy_data_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_datapolicy_data_policy.GoogleBigqueryDatapolicyDataPolicy;

GoogleBigqueryDatapolicyDataPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .dataPolicyId(java.lang.String)
    .dataPolicyType(java.lang.String)
    .location(java.lang.String)
    .policyTag(java.lang.String)
//  .dataMaskingPolicy(GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleBigqueryDatapolicyDataPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dataPolicyId">dataPolicyId</a></code> | <code>java.lang.String</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dataPolicyType">dataPolicyType</a></code> | <code>java.lang.String</code> | The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The name of the location of the data policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.policyTag">policyTag</a></code> | <code>java.lang.String</code> | Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dataMaskingPolicy">dataMaskingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#id GoogleBigqueryDatapolicyDataPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#project GoogleBigqueryDatapolicyDataPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataPolicyId`<sup>Required</sup> <a name="dataPolicyId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dataPolicyId"></a>

- *Type:* java.lang.String

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {dataPolicyId} in part of the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#data_policy_id GoogleBigqueryDatapolicyDataPolicy#data_policy_id}

---

##### `dataPolicyType`<sup>Required</sup> <a name="dataPolicyType" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dataPolicyType"></a>

- *Type:* java.lang.String

The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#data_policy_type GoogleBigqueryDatapolicyDataPolicy#data_policy_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The name of the location of the data policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#location GoogleBigqueryDatapolicyDataPolicy#location}

---

##### `policyTag`<sup>Required</sup> <a name="policyTag" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.policyTag"></a>

- *Type:* java.lang.String

Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#policy_tag GoogleBigqueryDatapolicyDataPolicy#policy_tag}

---

##### `dataMaskingPolicy`<sup>Optional</sup> <a name="dataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.dataMaskingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#data_masking_policy GoogleBigqueryDatapolicyDataPolicy#data_masking_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#id GoogleBigqueryDatapolicyDataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#project GoogleBigqueryDatapolicyDataPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#timeouts GoogleBigqueryDatapolicyDataPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putDataMaskingPolicy">putDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetDataMaskingPolicy">resetDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataMaskingPolicy` <a name="putDataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putDataMaskingPolicy"></a>

```java
public void putDataMaskingPolicy(GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putDataMaskingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleBigqueryDatapolicyDataPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>

---

##### `resetDataMaskingPolicy` <a name="resetDataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetDataMaskingPolicy"></a>

```java
public void resetDataMaskingPolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryDatapolicyDataPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_datapolicy_data_policy.GoogleBigqueryDatapolicyDataPolicy;

GoogleBigqueryDatapolicyDataPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_datapolicy_data_policy.GoogleBigqueryDatapolicyDataPolicy;

GoogleBigqueryDatapolicyDataPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_datapolicy_data_policy.GoogleBigqueryDatapolicyDataPolicy;

GoogleBigqueryDatapolicyDataPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_datapolicy_data_policy.GoogleBigqueryDatapolicyDataPolicy;

GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleBigqueryDatapolicyDataPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBigqueryDatapolicyDataPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBigqueryDatapolicyDataPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryDatapolicyDataPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicy">dataMaskingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference">GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicyInput">dataMaskingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyIdInput">dataPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyTypeInput">dataPolicyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTagInput">policyTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyId">dataPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyType">dataPolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTag">policyTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataMaskingPolicy`<sup>Required</sup> <a name="dataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicy"></a>

```java
public GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference getDataMaskingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeouts"></a>

```java
public GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference">GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference</a>

---

##### `dataMaskingPolicyInput`<sup>Optional</sup> <a name="dataMaskingPolicyInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicyInput"></a>

```java
public GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy getDataMaskingPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---

##### `dataPolicyIdInput`<sup>Optional</sup> <a name="dataPolicyIdInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyIdInput"></a>

```java
public java.lang.String getDataPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `dataPolicyTypeInput`<sup>Optional</sup> <a name="dataPolicyTypeInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyTypeInput"></a>

```java
public java.lang.String getDataPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `policyTagInput`<sup>Optional</sup> <a name="policyTagInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTagInput"></a>

```java
public java.lang.String getPolicyTagInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>

---

##### `dataPolicyId`<sup>Required</sup> <a name="dataPolicyId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyId"></a>

```java
public java.lang.String getDataPolicyId();
```

- *Type:* java.lang.String

---

##### `dataPolicyType`<sup>Required</sup> <a name="dataPolicyType" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyType"></a>

```java
public java.lang.String getDataPolicyType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `policyTag`<sup>Required</sup> <a name="policyTag" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTag"></a>

```java
public java.lang.String getPolicyTag();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDatapolicyDataPolicyConfig <a name="GoogleBigqueryDatapolicyDataPolicyConfig" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_datapolicy_data_policy.GoogleBigqueryDatapolicyDataPolicyConfig;

GoogleBigqueryDatapolicyDataPolicyConfig.builder()
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
    .dataPolicyId(java.lang.String)
    .dataPolicyType(java.lang.String)
    .location(java.lang.String)
    .policyTag(java.lang.String)
//  .dataMaskingPolicy(GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleBigqueryDatapolicyDataPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyId">dataPolicyId</a></code> | <code>java.lang.String</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyType">dataPolicyType</a></code> | <code>java.lang.String</code> | The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | The name of the location of the data policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.policyTag">policyTag</a></code> | <code>java.lang.String</code> | Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataMaskingPolicy">dataMaskingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#id GoogleBigqueryDatapolicyDataPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#project GoogleBigqueryDatapolicyDataPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataPolicyId`<sup>Required</sup> <a name="dataPolicyId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyId"></a>

```java
public java.lang.String getDataPolicyId();
```

- *Type:* java.lang.String

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {dataPolicyId} in part of the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#data_policy_id GoogleBigqueryDatapolicyDataPolicy#data_policy_id}

---

##### `dataPolicyType`<sup>Required</sup> <a name="dataPolicyType" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyType"></a>

```java
public java.lang.String getDataPolicyType();
```

- *Type:* java.lang.String

The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#data_policy_type GoogleBigqueryDatapolicyDataPolicy#data_policy_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The name of the location of the data policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#location GoogleBigqueryDatapolicyDataPolicy#location}

---

##### `policyTag`<sup>Required</sup> <a name="policyTag" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.policyTag"></a>

```java
public java.lang.String getPolicyTag();
```

- *Type:* java.lang.String

Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#policy_tag GoogleBigqueryDatapolicyDataPolicy#policy_tag}

---

##### `dataMaskingPolicy`<sup>Optional</sup> <a name="dataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataMaskingPolicy"></a>

```java
public GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy getDataMaskingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#data_masking_policy GoogleBigqueryDatapolicyDataPolicy#data_masking_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#id GoogleBigqueryDatapolicyDataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#project GoogleBigqueryDatapolicyDataPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.timeouts"></a>

```java
public GoogleBigqueryDatapolicyDataPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#timeouts GoogleBigqueryDatapolicyDataPolicy#timeouts}

---

### GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy <a name="GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_datapolicy_data_policy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy;

GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.builder()
//  .predefinedExpression(java.lang.String)
//  .routine(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.predefinedExpression">predefinedExpression</a></code> | <code>java.lang.String</code> | The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.routine">routine</a></code> | <code>java.lang.String</code> | The name of the BigQuery routine that contains the custom masking routine, in the format of projects/{projectNumber}/datasets/{dataset_id}/routines/{routine_id}. |

---

##### `predefinedExpression`<sup>Optional</sup> <a name="predefinedExpression" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.predefinedExpression"></a>

```java
public java.lang.String getPredefinedExpression();
```

- *Type:* java.lang.String

The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#predefined_expression GoogleBigqueryDatapolicyDataPolicy#predefined_expression}

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.routine"></a>

```java
public java.lang.String getRoutine();
```

- *Type:* java.lang.String

The name of the BigQuery routine that contains the custom masking routine, in the format of projects/{projectNumber}/datasets/{dataset_id}/routines/{routine_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#routine GoogleBigqueryDatapolicyDataPolicy#routine}

---

### GoogleBigqueryDatapolicyDataPolicyTimeouts <a name="GoogleBigqueryDatapolicyDataPolicyTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_datapolicy_data_policy.GoogleBigqueryDatapolicyDataPolicyTimeouts;

GoogleBigqueryDatapolicyDataPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#create GoogleBigqueryDatapolicyDataPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#delete GoogleBigqueryDatapolicyDataPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#update GoogleBigqueryDatapolicyDataPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#create GoogleBigqueryDatapolicyDataPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#delete GoogleBigqueryDatapolicyDataPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigquery_datapolicy_data_policy#update GoogleBigqueryDatapolicyDataPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference <a name="GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_datapolicy_data_policy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference;

new GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression">resetPredefinedExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetRoutine">resetRoutine</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredefinedExpression` <a name="resetPredefinedExpression" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression"></a>

```java
public void resetPredefinedExpression()
```

##### `resetRoutine` <a name="resetRoutine" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetRoutine"></a>

```java
public void resetRoutine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput">predefinedExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routineInput">routineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression">predefinedExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routine">routine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predefinedExpressionInput`<sup>Optional</sup> <a name="predefinedExpressionInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput"></a>

```java
public java.lang.String getPredefinedExpressionInput();
```

- *Type:* java.lang.String

---

##### `routineInput`<sup>Optional</sup> <a name="routineInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routineInput"></a>

```java
public java.lang.String getRoutineInput();
```

- *Type:* java.lang.String

---

##### `predefinedExpression`<sup>Required</sup> <a name="predefinedExpression" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression"></a>

```java
public java.lang.String getPredefinedExpression();
```

- *Type:* java.lang.String

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routine"></a>

```java
public java.lang.String getRoutine();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---


### GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference <a name="GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigquery_datapolicy_data_policy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference;

new GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>

---




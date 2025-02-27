# `googleDocumentAiWarehouseLocation` Submodule <a name="`googleDocumentAiWarehouseLocation` Submodule" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDocumentAiWarehouseLocation <a name="GoogleDocumentAiWarehouseLocation" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location google_document_ai_warehouse_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_warehouse_location.GoogleDocumentAiWarehouseLocation;

GoogleDocumentAiWarehouseLocation.Builder.create(Construct scope, java.lang.String id)
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
    .accessControlMode(java.lang.String)
    .databaseType(java.lang.String)
    .location(java.lang.String)
    .projectNumber(java.lang.String)
//  .documentCreatorDefaultRole(java.lang.String)
//  .id(java.lang.String)
//  .kmsKey(java.lang.String)
//  .timeouts(GoogleDocumentAiWarehouseLocationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.accessControlMode">accessControlMode</a></code> | <code>java.lang.String</code> | The access control mode for accessing the customer data. Possible values: ["ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_GCI", "ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_BYOID", "ACL_MODE_UNIVERSAL_ACCESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.databaseType">databaseType</a></code> | <code>java.lang.String</code> | The type of database used to store customer data. Possible values: ["DB_INFRA_SPANNER", "DB_CLOUD_SQL_POSTGRES"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location in which the instance is to be provisioned. It takes the form projects/{projectNumber}/locations/{location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.projectNumber">projectNumber</a></code> | <code>java.lang.String</code> | The unique identifier of the project. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.documentCreatorDefaultRole">documentCreatorDefaultRole</a></code> | <code>java.lang.String</code> | The default role for the person who create a document. Possible values: ["DOCUMENT_ADMIN", "DOCUMENT_EDITOR", "DOCUMENT_VIEWER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#id GoogleDocumentAiWarehouseLocation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS key used for CMEK encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts">GoogleDocumentAiWarehouseLocationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessControlMode`<sup>Required</sup> <a name="accessControlMode" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.accessControlMode"></a>

- *Type:* java.lang.String

The access control mode for accessing the customer data. Possible values: ["ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_GCI", "ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_BYOID", "ACL_MODE_UNIVERSAL_ACCESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#access_control_mode GoogleDocumentAiWarehouseLocation#access_control_mode}

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.databaseType"></a>

- *Type:* java.lang.String

The type of database used to store customer data. Possible values: ["DB_INFRA_SPANNER", "DB_CLOUD_SQL_POSTGRES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#database_type GoogleDocumentAiWarehouseLocation#database_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location in which the instance is to be provisioned. It takes the form projects/{projectNumber}/locations/{location}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#location GoogleDocumentAiWarehouseLocation#location}

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.projectNumber"></a>

- *Type:* java.lang.String

The unique identifier of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#project_number GoogleDocumentAiWarehouseLocation#project_number}

---

##### `documentCreatorDefaultRole`<sup>Optional</sup> <a name="documentCreatorDefaultRole" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.documentCreatorDefaultRole"></a>

- *Type:* java.lang.String

The default role for the person who create a document. Possible values: ["DOCUMENT_ADMIN", "DOCUMENT_EDITOR", "DOCUMENT_VIEWER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#document_creator_default_role GoogleDocumentAiWarehouseLocation#document_creator_default_role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#id GoogleDocumentAiWarehouseLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

The KMS key used for CMEK encryption.

It is required that
the kms key is in the same region as the endpoint. The
same key will be used for all provisioned resources, if
encryption is available. If the kmsKey is left empty, no
encryption will be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#kms_key GoogleDocumentAiWarehouseLocation#kms_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts">GoogleDocumentAiWarehouseLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#timeouts GoogleDocumentAiWarehouseLocation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.resetDocumentCreatorDefaultRole">resetDocumentCreatorDefaultRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.putTimeouts"></a>

```java
public void putTimeouts(GoogleDocumentAiWarehouseLocationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts">GoogleDocumentAiWarehouseLocationTimeouts</a>

---

##### `resetDocumentCreatorDefaultRole` <a name="resetDocumentCreatorDefaultRole" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.resetDocumentCreatorDefaultRole"></a>

```java
public void resetDocumentCreatorDefaultRole()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDocumentAiWarehouseLocation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_warehouse_location.GoogleDocumentAiWarehouseLocation;

GoogleDocumentAiWarehouseLocation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_warehouse_location.GoogleDocumentAiWarehouseLocation;

GoogleDocumentAiWarehouseLocation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_warehouse_location.GoogleDocumentAiWarehouseLocation;

GoogleDocumentAiWarehouseLocation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_warehouse_location.GoogleDocumentAiWarehouseLocation;

GoogleDocumentAiWarehouseLocation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDocumentAiWarehouseLocation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDocumentAiWarehouseLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDocumentAiWarehouseLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDocumentAiWarehouseLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDocumentAiWarehouseLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference">GoogleDocumentAiWarehouseLocationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.accessControlModeInput">accessControlModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.databaseTypeInput">databaseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.documentCreatorDefaultRoleInput">documentCreatorDefaultRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.projectNumberInput">projectNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts">GoogleDocumentAiWarehouseLocationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.accessControlMode">accessControlMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.databaseType">databaseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.documentCreatorDefaultRole">documentCreatorDefaultRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.projectNumber">projectNumber</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.timeouts"></a>

```java
public GoogleDocumentAiWarehouseLocationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference">GoogleDocumentAiWarehouseLocationTimeoutsOutputReference</a>

---

##### `accessControlModeInput`<sup>Optional</sup> <a name="accessControlModeInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.accessControlModeInput"></a>

```java
public java.lang.String getAccessControlModeInput();
```

- *Type:* java.lang.String

---

##### `databaseTypeInput`<sup>Optional</sup> <a name="databaseTypeInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.databaseTypeInput"></a>

```java
public java.lang.String getDatabaseTypeInput();
```

- *Type:* java.lang.String

---

##### `documentCreatorDefaultRoleInput`<sup>Optional</sup> <a name="documentCreatorDefaultRoleInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.documentCreatorDefaultRoleInput"></a>

```java
public java.lang.String getDocumentCreatorDefaultRoleInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectNumberInput`<sup>Optional</sup> <a name="projectNumberInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.projectNumberInput"></a>

```java
public java.lang.String getProjectNumberInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts">GoogleDocumentAiWarehouseLocationTimeouts</a>

---

##### `accessControlMode`<sup>Required</sup> <a name="accessControlMode" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.accessControlMode"></a>

```java
public java.lang.String getAccessControlMode();
```

- *Type:* java.lang.String

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.databaseType"></a>

```java
public java.lang.String getDatabaseType();
```

- *Type:* java.lang.String

---

##### `documentCreatorDefaultRole`<sup>Required</sup> <a name="documentCreatorDefaultRole" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.documentCreatorDefaultRole"></a>

```java
public java.lang.String getDocumentCreatorDefaultRole();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.projectNumber"></a>

```java
public java.lang.String getProjectNumber();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDocumentAiWarehouseLocationConfig <a name="GoogleDocumentAiWarehouseLocationConfig" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_warehouse_location.GoogleDocumentAiWarehouseLocationConfig;

GoogleDocumentAiWarehouseLocationConfig.builder()
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
    .accessControlMode(java.lang.String)
    .databaseType(java.lang.String)
    .location(java.lang.String)
    .projectNumber(java.lang.String)
//  .documentCreatorDefaultRole(java.lang.String)
//  .id(java.lang.String)
//  .kmsKey(java.lang.String)
//  .timeouts(GoogleDocumentAiWarehouseLocationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.accessControlMode">accessControlMode</a></code> | <code>java.lang.String</code> | The access control mode for accessing the customer data. Possible values: ["ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_GCI", "ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_BYOID", "ACL_MODE_UNIVERSAL_ACCESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.databaseType">databaseType</a></code> | <code>java.lang.String</code> | The type of database used to store customer data. Possible values: ["DB_INFRA_SPANNER", "DB_CLOUD_SQL_POSTGRES"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location in which the instance is to be provisioned. It takes the form projects/{projectNumber}/locations/{location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.projectNumber">projectNumber</a></code> | <code>java.lang.String</code> | The unique identifier of the project. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.documentCreatorDefaultRole">documentCreatorDefaultRole</a></code> | <code>java.lang.String</code> | The default role for the person who create a document. Possible values: ["DOCUMENT_ADMIN", "DOCUMENT_EDITOR", "DOCUMENT_VIEWER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#id GoogleDocumentAiWarehouseLocation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS key used for CMEK encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts">GoogleDocumentAiWarehouseLocationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessControlMode`<sup>Required</sup> <a name="accessControlMode" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.accessControlMode"></a>

```java
public java.lang.String getAccessControlMode();
```

- *Type:* java.lang.String

The access control mode for accessing the customer data. Possible values: ["ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_GCI", "ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_BYOID", "ACL_MODE_UNIVERSAL_ACCESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#access_control_mode GoogleDocumentAiWarehouseLocation#access_control_mode}

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.databaseType"></a>

```java
public java.lang.String getDatabaseType();
```

- *Type:* java.lang.String

The type of database used to store customer data. Possible values: ["DB_INFRA_SPANNER", "DB_CLOUD_SQL_POSTGRES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#database_type GoogleDocumentAiWarehouseLocation#database_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location in which the instance is to be provisioned. It takes the form projects/{projectNumber}/locations/{location}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#location GoogleDocumentAiWarehouseLocation#location}

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.projectNumber"></a>

```java
public java.lang.String getProjectNumber();
```

- *Type:* java.lang.String

The unique identifier of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#project_number GoogleDocumentAiWarehouseLocation#project_number}

---

##### `documentCreatorDefaultRole`<sup>Optional</sup> <a name="documentCreatorDefaultRole" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.documentCreatorDefaultRole"></a>

```java
public java.lang.String getDocumentCreatorDefaultRole();
```

- *Type:* java.lang.String

The default role for the person who create a document. Possible values: ["DOCUMENT_ADMIN", "DOCUMENT_EDITOR", "DOCUMENT_VIEWER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#document_creator_default_role GoogleDocumentAiWarehouseLocation#document_creator_default_role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#id GoogleDocumentAiWarehouseLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The KMS key used for CMEK encryption.

It is required that
the kms key is in the same region as the endpoint. The
same key will be used for all provisioned resources, if
encryption is available. If the kmsKey is left empty, no
encryption will be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#kms_key GoogleDocumentAiWarehouseLocation#kms_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationConfig.property.timeouts"></a>

```java
public GoogleDocumentAiWarehouseLocationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts">GoogleDocumentAiWarehouseLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#timeouts GoogleDocumentAiWarehouseLocation#timeouts}

---

### GoogleDocumentAiWarehouseLocationTimeouts <a name="GoogleDocumentAiWarehouseLocationTimeouts" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_warehouse_location.GoogleDocumentAiWarehouseLocationTimeouts;

GoogleDocumentAiWarehouseLocationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#create GoogleDocumentAiWarehouseLocation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#delete GoogleDocumentAiWarehouseLocation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#create GoogleDocumentAiWarehouseLocation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_document_ai_warehouse_location#delete GoogleDocumentAiWarehouseLocation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDocumentAiWarehouseLocationTimeoutsOutputReference <a name="GoogleDocumentAiWarehouseLocationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_warehouse_location.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference;

new GoogleDocumentAiWarehouseLocationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts">GoogleDocumentAiWarehouseLocationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseLocation.GoogleDocumentAiWarehouseLocationTimeouts">GoogleDocumentAiWarehouseLocationTimeouts</a>

---




# `googleDatastreamConnectionProfile` Submodule <a name="`googleDatastreamConnectionProfile` Submodule" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDatastreamConnectionProfile <a name="GoogleDatastreamConnectionProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile google_datastream_connection_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfile(Construct Scope, string Id, GoogleDatastreamConnectionProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig">GoogleDatastreamConnectionProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig">GoogleDatastreamConnectionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putBigqueryProfile">PutBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity">PutForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile">PutGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile">PutMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile">PutOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile">PutPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity">PutPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile">PutSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetBigqueryProfile">ResetBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetCreateWithoutValidation">ResetCreateWithoutValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetForwardSshConnectivity">ResetForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetGcsProfile">ResetGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetMysqlProfile">ResetMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOracleProfile">ResetOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPostgresqlProfile">ResetPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPrivateConnectivity">ResetPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSqlServerProfile">ResetSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigqueryProfile` <a name="PutBigqueryProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putBigqueryProfile"></a>

```csharp
private void PutBigqueryProfile(GoogleDatastreamConnectionProfileBigqueryProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putBigqueryProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

---

##### `PutForwardSshConnectivity` <a name="PutForwardSshConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity"></a>

```csharp
private void PutForwardSshConnectivity(GoogleDatastreamConnectionProfileForwardSshConnectivity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `PutGcsProfile` <a name="PutGcsProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile"></a>

```csharp
private void PutGcsProfile(GoogleDatastreamConnectionProfileGcsProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

---

##### `PutMysqlProfile` <a name="PutMysqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile"></a>

```csharp
private void PutMysqlProfile(GoogleDatastreamConnectionProfileMysqlProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

---

##### `PutOracleProfile` <a name="PutOracleProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile"></a>

```csharp
private void PutOracleProfile(GoogleDatastreamConnectionProfileOracleProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

---

##### `PutPostgresqlProfile` <a name="PutPostgresqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile"></a>

```csharp
private void PutPostgresqlProfile(GoogleDatastreamConnectionProfilePostgresqlProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

---

##### `PutPrivateConnectivity` <a name="PutPrivateConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity"></a>

```csharp
private void PutPrivateConnectivity(GoogleDatastreamConnectionProfilePrivateConnectivity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

---

##### `PutSqlServerProfile` <a name="PutSqlServerProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile"></a>

```csharp
private void PutSqlServerProfile(GoogleDatastreamConnectionProfileSqlServerProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDatastreamConnectionProfileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

---

##### `ResetBigqueryProfile` <a name="ResetBigqueryProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetBigqueryProfile"></a>

```csharp
private void ResetBigqueryProfile()
```

##### `ResetCreateWithoutValidation` <a name="ResetCreateWithoutValidation" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetCreateWithoutValidation"></a>

```csharp
private void ResetCreateWithoutValidation()
```

##### `ResetForwardSshConnectivity` <a name="ResetForwardSshConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetForwardSshConnectivity"></a>

```csharp
private void ResetForwardSshConnectivity()
```

##### `ResetGcsProfile` <a name="ResetGcsProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetGcsProfile"></a>

```csharp
private void ResetGcsProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMysqlProfile` <a name="ResetMysqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetMysqlProfile"></a>

```csharp
private void ResetMysqlProfile()
```

##### `ResetOracleProfile` <a name="ResetOracleProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOracleProfile"></a>

```csharp
private void ResetOracleProfile()
```

##### `ResetPostgresqlProfile` <a name="ResetPostgresqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPostgresqlProfile"></a>

```csharp
private void ResetPostgresqlProfile()
```

##### `ResetPrivateConnectivity` <a name="ResetPrivateConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPrivateConnectivity"></a>

```csharp
private void ResetPrivateConnectivity()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSqlServerProfile` <a name="ResetSqlServerProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSqlServerProfile"></a>

```csharp
private void ResetSqlServerProfile()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDatastreamConnectionProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDatastreamConnectionProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDatastreamConnectionProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDatastreamConnectionProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDatastreamConnectionProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDatastreamConnectionProfile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDatastreamConnectionProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDatastreamConnectionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDatastreamConnectionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfile">BigqueryProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference">GoogleDatastreamConnectionProfileBigqueryProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivity">ForwardSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference">GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfile">GcsProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference">GoogleDatastreamConnectionProfileGcsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfile">MysqlProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference">GoogleDatastreamConnectionProfileMysqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfile">OracleProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference">GoogleDatastreamConnectionProfileOracleProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfile">PostgresqlProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivity">PrivateConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference">GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfile">SqlServerProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference">GoogleDatastreamConnectionProfileSqlServerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference">GoogleDatastreamConnectionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfileInput">BigqueryProfileInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileIdInput">ConnectionProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidationInput">CreateWithoutValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivityInput">ForwardSshConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfileInput">GcsProfileInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfileInput">MysqlProfileInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfileInput">OracleProfileInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfileInput">PostgresqlProfileInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivityInput">PrivateConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfileInput">SqlServerProfileInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileId">ConnectionProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidation">CreateWithoutValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BigqueryProfile`<sup>Required</sup> <a name="BigqueryProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfile"></a>

```csharp
public GoogleDatastreamConnectionProfileBigqueryProfileOutputReference BigqueryProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference">GoogleDatastreamConnectionProfileBigqueryProfileOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ForwardSshConnectivity`<sup>Required</sup> <a name="ForwardSshConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivity"></a>

```csharp
public GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference ForwardSshConnectivity { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference">GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference</a>

---

##### `GcsProfile`<sup>Required</sup> <a name="GcsProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfile"></a>

```csharp
public GoogleDatastreamConnectionProfileGcsProfileOutputReference GcsProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference">GoogleDatastreamConnectionProfileGcsProfileOutputReference</a>

---

##### `MysqlProfile`<sup>Required</sup> <a name="MysqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfile"></a>

```csharp
public GoogleDatastreamConnectionProfileMysqlProfileOutputReference MysqlProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference">GoogleDatastreamConnectionProfileMysqlProfileOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OracleProfile`<sup>Required</sup> <a name="OracleProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfile"></a>

```csharp
public GoogleDatastreamConnectionProfileOracleProfileOutputReference OracleProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference">GoogleDatastreamConnectionProfileOracleProfileOutputReference</a>

---

##### `PostgresqlProfile`<sup>Required</sup> <a name="PostgresqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfile"></a>

```csharp
public GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference PostgresqlProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference</a>

---

##### `PrivateConnectivity`<sup>Required</sup> <a name="PrivateConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivity"></a>

```csharp
public GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference PrivateConnectivity { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference">GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference</a>

---

##### `SqlServerProfile`<sup>Required</sup> <a name="SqlServerProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfile"></a>

```csharp
public GoogleDatastreamConnectionProfileSqlServerProfileOutputReference SqlServerProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference">GoogleDatastreamConnectionProfileSqlServerProfileOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeouts"></a>

```csharp
public GoogleDatastreamConnectionProfileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference">GoogleDatastreamConnectionProfileTimeoutsOutputReference</a>

---

##### `BigqueryProfileInput`<sup>Optional</sup> <a name="BigqueryProfileInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfileInput"></a>

```csharp
public GoogleDatastreamConnectionProfileBigqueryProfile BigqueryProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

---

##### `ConnectionProfileIdInput`<sup>Optional</sup> <a name="ConnectionProfileIdInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileIdInput"></a>

```csharp
public string ConnectionProfileIdInput { get; }
```

- *Type:* string

---

##### `CreateWithoutValidationInput`<sup>Optional</sup> <a name="CreateWithoutValidationInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidationInput"></a>

```csharp
public object CreateWithoutValidationInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ForwardSshConnectivityInput`<sup>Optional</sup> <a name="ForwardSshConnectivityInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivityInput"></a>

```csharp
public GoogleDatastreamConnectionProfileForwardSshConnectivity ForwardSshConnectivityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `GcsProfileInput`<sup>Optional</sup> <a name="GcsProfileInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfileInput"></a>

```csharp
public GoogleDatastreamConnectionProfileGcsProfile GcsProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MysqlProfileInput`<sup>Optional</sup> <a name="MysqlProfileInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfileInput"></a>

```csharp
public GoogleDatastreamConnectionProfileMysqlProfile MysqlProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

---

##### `OracleProfileInput`<sup>Optional</sup> <a name="OracleProfileInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfileInput"></a>

```csharp
public GoogleDatastreamConnectionProfileOracleProfile OracleProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

---

##### `PostgresqlProfileInput`<sup>Optional</sup> <a name="PostgresqlProfileInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfileInput"></a>

```csharp
public GoogleDatastreamConnectionProfilePostgresqlProfile PostgresqlProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

---

##### `PrivateConnectivityInput`<sup>Optional</sup> <a name="PrivateConnectivityInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivityInput"></a>

```csharp
public GoogleDatastreamConnectionProfilePrivateConnectivity PrivateConnectivityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SqlServerProfileInput`<sup>Optional</sup> <a name="SqlServerProfileInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfileInput"></a>

```csharp
public GoogleDatastreamConnectionProfileSqlServerProfile SqlServerProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ConnectionProfileId`<sup>Required</sup> <a name="ConnectionProfileId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileId"></a>

```csharp
public string ConnectionProfileId { get; }
```

- *Type:* string

---

##### `CreateWithoutValidation`<sup>Required</sup> <a name="CreateWithoutValidation" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidation"></a>

```csharp
public object CreateWithoutValidation { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDatastreamConnectionProfileBigqueryProfile <a name="GoogleDatastreamConnectionProfileBigqueryProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileBigqueryProfile {

};
```


### GoogleDatastreamConnectionProfileConfig <a name="GoogleDatastreamConnectionProfileConfig" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConnectionProfileId,
    string DisplayName,
    string Location,
    GoogleDatastreamConnectionProfileBigqueryProfile BigqueryProfile = null,
    object CreateWithoutValidation = null,
    GoogleDatastreamConnectionProfileForwardSshConnectivity ForwardSshConnectivity = null,
    GoogleDatastreamConnectionProfileGcsProfile GcsProfile = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleDatastreamConnectionProfileMysqlProfile MysqlProfile = null,
    GoogleDatastreamConnectionProfileOracleProfile OracleProfile = null,
    GoogleDatastreamConnectionProfilePostgresqlProfile PostgresqlProfile = null,
    GoogleDatastreamConnectionProfilePrivateConnectivity PrivateConnectivity = null,
    string Project = null,
    GoogleDatastreamConnectionProfileSqlServerProfile SqlServerProfile = null,
    GoogleDatastreamConnectionProfileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connectionProfileId">ConnectionProfileId</a></code> | <code>string</code> | The connection profile identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.location">Location</a></code> | <code>string</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.bigqueryProfile">BigqueryProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.createWithoutValidation">CreateWithoutValidation</a></code> | <code>object</code> | Create the connection profile without validating it. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forwardSshConnectivity">ForwardSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.gcsProfile">GcsProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.mysqlProfile">MysqlProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.oracleProfile">OracleProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.postgresqlProfile">PostgresqlProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.privateConnectivity">PrivateConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.sqlServerProfile">SqlServerProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a></code> | sql_server_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectionProfileId`<sup>Required</sup> <a name="ConnectionProfileId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connectionProfileId"></a>

```csharp
public string ConnectionProfileId { get; set; }
```

- *Type:* string

The connection profile identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#connection_profile_id GoogleDatastreamConnectionProfile#connection_profile_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#display_name GoogleDatastreamConnectionProfile#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#location GoogleDatastreamConnectionProfile#location}

---

##### `BigqueryProfile`<sup>Optional</sup> <a name="BigqueryProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.bigqueryProfile"></a>

```csharp
public GoogleDatastreamConnectionProfileBigqueryProfile BigqueryProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#bigquery_profile GoogleDatastreamConnectionProfile#bigquery_profile}

---

##### `CreateWithoutValidation`<sup>Optional</sup> <a name="CreateWithoutValidation" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.createWithoutValidation"></a>

```csharp
public object CreateWithoutValidation { get; set; }
```

- *Type:* object

Create the connection profile without validating it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#create_without_validation GoogleDatastreamConnectionProfile#create_without_validation}

---

##### `ForwardSshConnectivity`<sup>Optional</sup> <a name="ForwardSshConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forwardSshConnectivity"></a>

```csharp
public GoogleDatastreamConnectionProfileForwardSshConnectivity ForwardSshConnectivity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#forward_ssh_connectivity GoogleDatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `GcsProfile`<sup>Optional</sup> <a name="GcsProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.gcsProfile"></a>

```csharp
public GoogleDatastreamConnectionProfileGcsProfile GcsProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#gcs_profile GoogleDatastreamConnectionProfile#gcs_profile}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#labels GoogleDatastreamConnectionProfile#labels}

---

##### `MysqlProfile`<sup>Optional</sup> <a name="MysqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.mysqlProfile"></a>

```csharp
public GoogleDatastreamConnectionProfileMysqlProfile MysqlProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#mysql_profile GoogleDatastreamConnectionProfile#mysql_profile}

---

##### `OracleProfile`<sup>Optional</sup> <a name="OracleProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.oracleProfile"></a>

```csharp
public GoogleDatastreamConnectionProfileOracleProfile OracleProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#oracle_profile GoogleDatastreamConnectionProfile#oracle_profile}

---

##### `PostgresqlProfile`<sup>Optional</sup> <a name="PostgresqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.postgresqlProfile"></a>

```csharp
public GoogleDatastreamConnectionProfilePostgresqlProfile PostgresqlProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#postgresql_profile GoogleDatastreamConnectionProfile#postgresql_profile}

---

##### `PrivateConnectivity`<sup>Optional</sup> <a name="PrivateConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.privateConnectivity"></a>

```csharp
public GoogleDatastreamConnectionProfilePrivateConnectivity PrivateConnectivity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#private_connectivity GoogleDatastreamConnectionProfile#private_connectivity}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}.

---

##### `SqlServerProfile`<sup>Optional</sup> <a name="SqlServerProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.sqlServerProfile"></a>

```csharp
public GoogleDatastreamConnectionProfileSqlServerProfile SqlServerProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

sql_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#sql_server_profile GoogleDatastreamConnectionProfile#sql_server_profile}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.timeouts"></a>

```csharp
public GoogleDatastreamConnectionProfileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#timeouts GoogleDatastreamConnectionProfile#timeouts}

---

### GoogleDatastreamConnectionProfileForwardSshConnectivity <a name="GoogleDatastreamConnectionProfileForwardSshConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileForwardSshConnectivity {
    string Hostname,
    string Username,
    string Password = null,
    double Port = null,
    string PrivateKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.hostname">Hostname</a></code> | <code>string</code> | Hostname for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.username">Username</a></code> | <code>string</code> | Username for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.password">Password</a></code> | <code>string</code> | SSH password. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.port">Port</a></code> | <code>double</code> | Port for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.privateKey">PrivateKey</a></code> | <code>string</code> | SSH private key. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

SSH password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

SSH private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#private_key GoogleDatastreamConnectionProfile#private_key}

---

### GoogleDatastreamConnectionProfileGcsProfile <a name="GoogleDatastreamConnectionProfileGcsProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileGcsProfile {
    string Bucket,
    string RootPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.bucket">Bucket</a></code> | <code>string</code> | The Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.rootPath">RootPath</a></code> | <code>string</code> | The root path inside the Cloud Storage bucket. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#bucket GoogleDatastreamConnectionProfile#bucket}

---

##### `RootPath`<sup>Optional</sup> <a name="RootPath" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.rootPath"></a>

```csharp
public string RootPath { get; set; }
```

- *Type:* string

The root path inside the Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#root_path GoogleDatastreamConnectionProfile#root_path}

---

### GoogleDatastreamConnectionProfileMysqlProfile <a name="GoogleDatastreamConnectionProfileMysqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileMysqlProfile {
    string Hostname,
    string Password,
    string Username,
    double Port = null,
    GoogleDatastreamConnectionProfileMysqlProfileSslConfig SslConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.hostname">Hostname</a></code> | <code>string</code> | Hostname for the MySQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.password">Password</a></code> | <code>string</code> | Password for the MySQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.username">Username</a></code> | <code>string</code> | Username for the MySQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.port">Port</a></code> | <code>double</code> | Port for the MySQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.sslConfig">SslConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Hostname for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `SslConfig`<sup>Optional</sup> <a name="SslConfig" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.sslConfig"></a>

```csharp
public GoogleDatastreamConnectionProfileMysqlProfileSslConfig SslConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}

---

### GoogleDatastreamConnectionProfileMysqlProfileSslConfig <a name="GoogleDatastreamConnectionProfileMysqlProfileSslConfig" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileMysqlProfileSslConfig {
    string CaCertificate = null,
    string ClientCertificate = null,
    string ClientKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate">CaCertificate</a></code> | <code>string</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey">ClientKey</a></code> | <code>string</code> | PEM-encoded private key associated with the Client Certificate. |

---

##### `CaCertificate`<sup>Optional</sup> <a name="CaCertificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate"></a>

```csharp
public string CaCertificate { get; set; }
```

- *Type:* string

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; set; }
```

- *Type:* string

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey"></a>

```csharp
public string ClientKey { get; set; }
```

- *Type:* string

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}

---

### GoogleDatastreamConnectionProfileOracleProfile <a name="GoogleDatastreamConnectionProfileOracleProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileOracleProfile {
    string DatabaseService,
    string Hostname,
    string Password,
    string Username,
    System.Collections.Generic.IDictionary<string, string> ConnectionAttributes = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.databaseService">DatabaseService</a></code> | <code>string</code> | Database for the Oracle connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.hostname">Hostname</a></code> | <code>string</code> | Hostname for the Oracle connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.password">Password</a></code> | <code>string</code> | Password for the Oracle connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.username">Username</a></code> | <code>string</code> | Username for the Oracle connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.connectionAttributes">ConnectionAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Connection string attributes. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.port">Port</a></code> | <code>double</code> | Port for the Oracle connection. |

---

##### `DatabaseService`<sup>Required</sup> <a name="DatabaseService" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.databaseService"></a>

```csharp
public string DatabaseService { get; set; }
```

- *Type:* string

Database for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#database_service GoogleDatastreamConnectionProfile#database_service}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Hostname for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `ConnectionAttributes`<sup>Optional</sup> <a name="ConnectionAttributes" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.connectionAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectionAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Connection string attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#connection_attributes GoogleDatastreamConnectionProfile#connection_attributes}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

### GoogleDatastreamConnectionProfilePostgresqlProfile <a name="GoogleDatastreamConnectionProfilePostgresqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfilePostgresqlProfile {
    string Database,
    string Hostname,
    string Password,
    string Username,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.database">Database</a></code> | <code>string</code> | Database for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.hostname">Hostname</a></code> | <code>string</code> | Hostname for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.password">Password</a></code> | <code>string</code> | Password for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.username">Username</a></code> | <code>string</code> | Username for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.port">Port</a></code> | <code>double</code> | Port for the PostgreSQL connection. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Database for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Hostname for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

### GoogleDatastreamConnectionProfilePrivateConnectivity <a name="GoogleDatastreamConnectionProfilePrivateConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfilePrivateConnectivity {
    string PrivateConnection
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.property.privateConnection">PrivateConnection</a></code> | <code>string</code> | A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'. |

---

##### `PrivateConnection`<sup>Required</sup> <a name="PrivateConnection" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.property.privateConnection"></a>

```csharp
public string PrivateConnection { get; set; }
```

- *Type:* string

A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#private_connection GoogleDatastreamConnectionProfile#private_connection}

---

### GoogleDatastreamConnectionProfileSqlServerProfile <a name="GoogleDatastreamConnectionProfileSqlServerProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileSqlServerProfile {
    string Database,
    string Hostname,
    string Password,
    string Username,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.database">Database</a></code> | <code>string</code> | Database for the SQL Server connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.hostname">Hostname</a></code> | <code>string</code> | Hostname for the SQL Server connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.password">Password</a></code> | <code>string</code> | Password for the SQL Server connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.username">Username</a></code> | <code>string</code> | Username for the SQL Server connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.port">Port</a></code> | <code>double</code> | Port for the SQL Server connection. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Database for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Hostname for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

### GoogleDatastreamConnectionProfileTimeouts <a name="GoogleDatastreamConnectionProfileTimeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#create GoogleDatastreamConnectionProfile#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#delete GoogleDatastreamConnectionProfile#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#update GoogleDatastreamConnectionProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#create GoogleDatastreamConnectionProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#delete GoogleDatastreamConnectionProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_datastream_connection_profile#update GoogleDatastreamConnectionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDatastreamConnectionProfileBigqueryProfileOutputReference <a name="GoogleDatastreamConnectionProfileBigqueryProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileBigqueryProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue"></a>

```csharp
public GoogleDatastreamConnectionProfileBigqueryProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

---


### GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference <a name="GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue"></a>

```csharp
public GoogleDatastreamConnectionProfileForwardSshConnectivity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

---


### GoogleDatastreamConnectionProfileGcsProfileOutputReference <a name="GoogleDatastreamConnectionProfileGcsProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileGcsProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resetRootPath">ResetRootPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRootPath` <a name="ResetRootPath" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resetRootPath"></a>

```csharp
private void ResetRootPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput">RootPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPath">RootPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `RootPathInput`<sup>Optional</sup> <a name="RootPathInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput"></a>

```csharp
public string RootPathInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `RootPath`<sup>Required</sup> <a name="RootPath" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPath"></a>

```csharp
public string RootPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.internalValue"></a>

```csharp
public GoogleDatastreamConnectionProfileGcsProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

---


### GoogleDatastreamConnectionProfileMysqlProfileOutputReference <a name="GoogleDatastreamConnectionProfileMysqlProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileMysqlProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig">PutSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig">ResetSslConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSslConfig` <a name="PutSslConfig" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig"></a>

```csharp
private void PutSslConfig(GoogleDatastreamConnectionProfileMysqlProfileSslConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetSslConfig` <a name="ResetSslConfig" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig"></a>

```csharp
private void ResetSslConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig">SslConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference">GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput">SslConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SslConfig`<sup>Required</sup> <a name="SslConfig" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig"></a>

```csharp
public GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference SslConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference">GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a>

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SslConfigInput`<sup>Optional</sup> <a name="SslConfigInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput"></a>

```csharp
public GoogleDatastreamConnectionProfileMysqlProfileSslConfig SslConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue"></a>

```csharp
public GoogleDatastreamConnectionProfileMysqlProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

---


### GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference <a name="GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate">ResetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaCertificate` <a name="ResetCaCertificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate"></a>

```csharp
private void ResetCaCertificate()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate"></a>

```csharp
private void ResetClientCertificate()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey"></a>

```csharp
private void ResetClientKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet">CaCertificateSet</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet">ClientCertificateSet</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet">ClientKeySet</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput">CaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate">CaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey">ClientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCertificateSet`<sup>Required</sup> <a name="CaCertificateSet" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet"></a>

```csharp
public IResolvable CaCertificateSet { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ClientCertificateSet`<sup>Required</sup> <a name="ClientCertificateSet" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```csharp
public IResolvable ClientCertificateSet { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ClientKeySet`<sup>Required</sup> <a name="ClientKeySet" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet"></a>

```csharp
public IResolvable ClientKeySet { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput"></a>

```csharp
public string CaCertificateInput { get; }
```

- *Type:* string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```csharp
public string ClientCertificateInput { get; }
```

- *Type:* string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput"></a>

```csharp
public string ClientKeyInput { get; }
```

- *Type:* string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate"></a>

```csharp
public string CaCertificate { get; }
```

- *Type:* string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; }
```

- *Type:* string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey"></a>

```csharp
public string ClientKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDatastreamConnectionProfileMysqlProfileSslConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

---


### GoogleDatastreamConnectionProfileOracleProfileOutputReference <a name="GoogleDatastreamConnectionProfileOracleProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileOracleProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes">ResetConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionAttributes` <a name="ResetConnectionAttributes" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes"></a>

```csharp
private void ResetConnectionAttributes()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput">ConnectionAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput">DatabaseServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes">ConnectionAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseService">DatabaseService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionAttributesInput`<sup>Optional</sup> <a name="ConnectionAttributesInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectionAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatabaseServiceInput`<sup>Optional</sup> <a name="DatabaseServiceInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput"></a>

```csharp
public string DatabaseServiceInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `ConnectionAttributes`<sup>Required</sup> <a name="ConnectionAttributes" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectionAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatabaseService`<sup>Required</sup> <a name="DatabaseService" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseService"></a>

```csharp
public string DatabaseService { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.internalValue"></a>

```csharp
public GoogleDatastreamConnectionProfileOracleProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

---


### GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference <a name="GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue"></a>

```csharp
public GoogleDatastreamConnectionProfilePostgresqlProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

---


### GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference <a name="GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput">PrivateConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection">PrivateConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateConnectionInput`<sup>Optional</sup> <a name="PrivateConnectionInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput"></a>

```csharp
public string PrivateConnectionInput { get; }
```

- *Type:* string

---

##### `PrivateConnection`<sup>Required</sup> <a name="PrivateConnection" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection"></a>

```csharp
public string PrivateConnection { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue"></a>

```csharp
public GoogleDatastreamConnectionProfilePrivateConnectivity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

---


### GoogleDatastreamConnectionProfileSqlServerProfileOutputReference <a name="GoogleDatastreamConnectionProfileSqlServerProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileSqlServerProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.internalValue"></a>

```csharp
public GoogleDatastreamConnectionProfileSqlServerProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

---


### GoogleDatastreamConnectionProfileTimeoutsOutputReference <a name="GoogleDatastreamConnectionProfileTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDatastreamConnectionProfileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




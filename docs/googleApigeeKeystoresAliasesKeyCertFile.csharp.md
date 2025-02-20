# `googleApigeeKeystoresAliasesKeyCertFile` Submodule <a name="`googleApigeeKeystoresAliasesKeyCertFile` Submodule" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeKeystoresAliasesKeyCertFile <a name="GoogleApigeeKeystoresAliasesKeyCertFile" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file google_apigee_keystores_aliases_key_cert_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFile(Construct Scope, string Id, GoogleApigeeKeystoresAliasesKeyCertFileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig">GoogleApigeeKeystoresAliasesKeyCertFileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig">GoogleApigeeKeystoresAliasesKeyCertFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putCertsInfo">PutCertsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetCertsInfo">ResetCertsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertsInfo` <a name="PutCertsInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putCertsInfo"></a>

```csharp
private void PutCertsInfo(GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putCertsInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleApigeeKeystoresAliasesKeyCertFileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a>

---

##### `ResetCertsInfo` <a name="ResetCertsInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetCertsInfo"></a>

```csharp
private void ResetCertsInfo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeKeystoresAliasesKeyCertFile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeKeystoresAliasesKeyCertFile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeKeystoresAliasesKeyCertFile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeKeystoresAliasesKeyCertFile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeKeystoresAliasesKeyCertFile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleApigeeKeystoresAliasesKeyCertFile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeKeystoresAliasesKeyCertFile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeKeystoresAliasesKeyCertFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeKeystoresAliasesKeyCertFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certsInfo">CertsInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference">GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certInput">CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certsInfoInput">CertsInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keystoreInput">KeystoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.cert">Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keystore">Keystore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.password">Password</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CertsInfo`<sup>Required</sup> <a name="CertsInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certsInfo"></a>

```csharp
public GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference CertsInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.timeouts"></a>

```csharp
public GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference">GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certInput"></a>

```csharp
public string CertInput { get; }
```

- *Type:* string

---

##### `CertsInfoInput`<sup>Optional</sup> <a name="CertsInfoInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certsInfoInput"></a>

```csharp
public GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo CertsInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `KeystoreInput`<sup>Optional</sup> <a name="KeystoreInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keystoreInput"></a>

```csharp
public string KeystoreInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.cert"></a>

```csharp
public string Cert { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Keystore`<sup>Required</sup> <a name="Keystore" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keystore"></a>

```csharp
public string Keystore { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo <a name="GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo {
    object CertInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo.property.certInfo">CertInfo</a></code> | <code>object</code> | cert_info block. |

---

##### `CertInfo`<sup>Optional</sup> <a name="CertInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo.property.certInfo"></a>

```csharp
public object CertInfo { get; set; }
```

- *Type:* object

cert_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#cert_info GoogleApigeeKeystoresAliasesKeyCertFile#cert_info}

---

### GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo <a name="GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo {
    string BasicConstraints = null,
    string ExpiryDate = null,
    string Issuer = null,
    string IsValid = null,
    string PublicKey = null,
    string SerialNumber = null,
    string SigAlgName = null,
    string Subject = null,
    string[] SubjectAlternativeNames = null,
    string ValidFrom = null,
    double Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.basicConstraints">BasicConstraints</a></code> | <code>string</code> | X.509 basic constraints extension. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.expiryDate">ExpiryDate</a></code> | <code>string</code> | X.509 notAfter validity period in milliseconds since epoch. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.issuer">Issuer</a></code> | <code>string</code> | X.509 issuer. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.isValid">IsValid</a></code> | <code>string</code> | Flag that specifies whether the certificate is valid. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.publicKey">PublicKey</a></code> | <code>string</code> | Public key component of the X.509 subject public key info. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.serialNumber">SerialNumber</a></code> | <code>string</code> | X.509 serial number. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.sigAlgName">SigAlgName</a></code> | <code>string</code> | X.509 signatureAlgorithm. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.subject">Subject</a></code> | <code>string</code> | X.509 subject. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>string[]</code> | X.509 subject alternative names (SANs) extension. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.validFrom">ValidFrom</a></code> | <code>string</code> | X.509 notBefore validity period in milliseconds since epoch. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.version">Version</a></code> | <code>double</code> | X.509 version. |

---

##### `BasicConstraints`<sup>Optional</sup> <a name="BasicConstraints" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.basicConstraints"></a>

```csharp
public string BasicConstraints { get; set; }
```

- *Type:* string

X.509 basic constraints extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#basic_constraints GoogleApigeeKeystoresAliasesKeyCertFile#basic_constraints}

---

##### `ExpiryDate`<sup>Optional</sup> <a name="ExpiryDate" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.expiryDate"></a>

```csharp
public string ExpiryDate { get; set; }
```

- *Type:* string

X.509 notAfter validity period in milliseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#expiry_date GoogleApigeeKeystoresAliasesKeyCertFile#expiry_date}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

X.509 issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#issuer GoogleApigeeKeystoresAliasesKeyCertFile#issuer}

---

##### `IsValid`<sup>Optional</sup> <a name="IsValid" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.isValid"></a>

```csharp
public string IsValid { get; set; }
```

- *Type:* string

Flag that specifies whether the certificate is valid.

Flag is set to Yes if the certificate is valid, No if expired, or Not yet if not yet valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#is_valid GoogleApigeeKeystoresAliasesKeyCertFile#is_valid}

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Public key component of the X.509 subject public key info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#public_key GoogleApigeeKeystoresAliasesKeyCertFile#public_key}

---

##### `SerialNumber`<sup>Optional</sup> <a name="SerialNumber" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.serialNumber"></a>

```csharp
public string SerialNumber { get; set; }
```

- *Type:* string

X.509 serial number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#serial_number GoogleApigeeKeystoresAliasesKeyCertFile#serial_number}

---

##### `SigAlgName`<sup>Optional</sup> <a name="SigAlgName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.sigAlgName"></a>

```csharp
public string SigAlgName { get; set; }
```

- *Type:* string

X.509 signatureAlgorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#sig_alg_name GoogleApigeeKeystoresAliasesKeyCertFile#sig_alg_name}

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

X.509 subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#subject GoogleApigeeKeystoresAliasesKeyCertFile#subject}

---

##### `SubjectAlternativeNames`<sup>Optional</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.subjectAlternativeNames"></a>

```csharp
public string[] SubjectAlternativeNames { get; set; }
```

- *Type:* string[]

X.509 subject alternative names (SANs) extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#subject_alternative_names GoogleApigeeKeystoresAliasesKeyCertFile#subject_alternative_names}

---

##### `ValidFrom`<sup>Optional</sup> <a name="ValidFrom" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.validFrom"></a>

```csharp
public string ValidFrom { get; set; }
```

- *Type:* string

X.509 notBefore validity period in milliseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#valid_from GoogleApigeeKeystoresAliasesKeyCertFile#valid_from}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

X.509 version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#version GoogleApigeeKeystoresAliasesKeyCertFile#version}

---

### GoogleApigeeKeystoresAliasesKeyCertFileConfig <a name="GoogleApigeeKeystoresAliasesKeyCertFileConfig" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Alias,
    string Cert,
    string Environment,
    string Keystore,
    string OrgId,
    GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo CertsInfo = null,
    string Id = null,
    string Key = null,
    string Password = null,
    GoogleApigeeKeystoresAliasesKeyCertFileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.alias">Alias</a></code> | <code>string</code> | Alias Name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.cert">Cert</a></code> | <code>string</code> | Cert content. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.environment">Environment</a></code> | <code>string</code> | Environment associated with the alias. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.keystore">Keystore</a></code> | <code>string</code> | Keystore Name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.orgId">OrgId</a></code> | <code>string</code> | Organization ID associated with the alias. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.certsInfo">CertsInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a></code> | certs_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#id GoogleApigeeKeystoresAliasesKeyCertFile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.key">Key</a></code> | <code>string</code> | Private Key content, omit if uploading to truststore. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.password">Password</a></code> | <code>string</code> | Password for the Private Key if it's encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#alias GoogleApigeeKeystoresAliasesKeyCertFile#alias}

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.cert"></a>

```csharp
public string Cert { get; set; }
```

- *Type:* string

Cert content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#cert GoogleApigeeKeystoresAliasesKeyCertFile#cert}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Environment associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#environment GoogleApigeeKeystoresAliasesKeyCertFile#environment}

---

##### `Keystore`<sup>Required</sup> <a name="Keystore" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.keystore"></a>

```csharp
public string Keystore { get; set; }
```

- *Type:* string

Keystore Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#keystore GoogleApigeeKeystoresAliasesKeyCertFile#keystore}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

Organization ID associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#org_id GoogleApigeeKeystoresAliasesKeyCertFile#org_id}

---

##### `CertsInfo`<sup>Optional</sup> <a name="CertsInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.certsInfo"></a>

```csharp
public GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo CertsInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

certs_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#certs_info GoogleApigeeKeystoresAliasesKeyCertFile#certs_info}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#id GoogleApigeeKeystoresAliasesKeyCertFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Private Key content, omit if uploading to truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#key GoogleApigeeKeystoresAliasesKeyCertFile#key}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for the Private Key if it's encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#password GoogleApigeeKeystoresAliasesKeyCertFile#password}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.timeouts"></a>

```csharp
public GoogleApigeeKeystoresAliasesKeyCertFileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#timeouts GoogleApigeeKeystoresAliasesKeyCertFile#timeouts}

---

### GoogleApigeeKeystoresAliasesKeyCertFileTimeouts <a name="GoogleApigeeKeystoresAliasesKeyCertFileTimeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFileTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#create GoogleApigeeKeystoresAliasesKeyCertFile#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#delete GoogleApigeeKeystoresAliasesKeyCertFile#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#read GoogleApigeeKeystoresAliasesKeyCertFile#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#update GoogleApigeeKeystoresAliasesKeyCertFile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#create GoogleApigeeKeystoresAliasesKeyCertFile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#delete GoogleApigeeKeystoresAliasesKeyCertFile#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#read GoogleApigeeKeystoresAliasesKeyCertFile#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#update GoogleApigeeKeystoresAliasesKeyCertFile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList <a name="GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.get"></a>

```csharp
private GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference <a name="GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetBasicConstraints">ResetBasicConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetExpiryDate">ResetExpiryDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetIsValid">ResetIsValid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSerialNumber">ResetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSigAlgName">ResetSigAlgName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSubjectAlternativeNames">ResetSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetValidFrom">ResetValidFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBasicConstraints` <a name="ResetBasicConstraints" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetBasicConstraints"></a>

```csharp
private void ResetBasicConstraints()
```

##### `ResetExpiryDate` <a name="ResetExpiryDate" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetExpiryDate"></a>

```csharp
private void ResetExpiryDate()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetIsValid` <a name="ResetIsValid" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetIsValid"></a>

```csharp
private void ResetIsValid()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetPublicKey"></a>

```csharp
private void ResetPublicKey()
```

##### `ResetSerialNumber` <a name="ResetSerialNumber" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSerialNumber"></a>

```csharp
private void ResetSerialNumber()
```

##### `ResetSigAlgName` <a name="ResetSigAlgName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSigAlgName"></a>

```csharp
private void ResetSigAlgName()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```

##### `ResetSubjectAlternativeNames` <a name="ResetSubjectAlternativeNames" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSubjectAlternativeNames"></a>

```csharp
private void ResetSubjectAlternativeNames()
```

##### `ResetValidFrom` <a name="ResetValidFrom" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetValidFrom"></a>

```csharp
private void ResetValidFrom()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.basicConstraintsInput">BasicConstraintsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.expiryDateInput">ExpiryDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.isValidInput">IsValidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.serialNumberInput">SerialNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.sigAlgNameInput">SigAlgNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectAlternativeNamesInput">SubjectAlternativeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.validFromInput">ValidFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.basicConstraints">BasicConstraints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.expiryDate">ExpiryDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.isValid">IsValid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.sigAlgName">SigAlgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.validFrom">ValidFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicConstraintsInput`<sup>Optional</sup> <a name="BasicConstraintsInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.basicConstraintsInput"></a>

```csharp
public string BasicConstraintsInput { get; }
```

- *Type:* string

---

##### `ExpiryDateInput`<sup>Optional</sup> <a name="ExpiryDateInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.expiryDateInput"></a>

```csharp
public string ExpiryDateInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `IsValidInput`<sup>Optional</sup> <a name="IsValidInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.isValidInput"></a>

```csharp
public string IsValidInput { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `SerialNumberInput`<sup>Optional</sup> <a name="SerialNumberInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.serialNumberInput"></a>

```csharp
public string SerialNumberInput { get; }
```

- *Type:* string

---

##### `SigAlgNameInput`<sup>Optional</sup> <a name="SigAlgNameInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.sigAlgNameInput"></a>

```csharp
public string SigAlgNameInput { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNamesInput`<sup>Optional</sup> <a name="SubjectAlternativeNamesInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectAlternativeNamesInput"></a>

```csharp
public string[] SubjectAlternativeNamesInput { get; }
```

- *Type:* string[]

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `ValidFromInput`<sup>Optional</sup> <a name="ValidFromInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.validFromInput"></a>

```csharp
public string ValidFromInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `BasicConstraints`<sup>Required</sup> <a name="BasicConstraints" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.basicConstraints"></a>

```csharp
public string BasicConstraints { get; }
```

- *Type:* string

---

##### `ExpiryDate`<sup>Required</sup> <a name="ExpiryDate" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.expiryDate"></a>

```csharp
public string ExpiryDate { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `IsValid`<sup>Required</sup> <a name="IsValid" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.isValid"></a>

```csharp
public string IsValid { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `SigAlgName`<sup>Required</sup> <a name="SigAlgName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.sigAlgName"></a>

```csharp
public string SigAlgName { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectAlternativeNames"></a>

```csharp
public string[] SubjectAlternativeNames { get; }
```

- *Type:* string[]

---

##### `ValidFrom`<sup>Required</sup> <a name="ValidFrom" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.validFrom"></a>

```csharp
public string ValidFrom { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference <a name="GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.putCertInfo">PutCertInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resetCertInfo">ResetCertInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertInfo` <a name="PutCertInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.putCertInfo"></a>

```csharp
private void PutCertInfo(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.putCertInfo.parameter.value"></a>

- *Type:* object

---

##### `ResetCertInfo` <a name="ResetCertInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resetCertInfo"></a>

```csharp
private void ResetCertInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.certInfo">CertInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.certInfoInput">CertInfoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertInfo`<sup>Required</sup> <a name="CertInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.certInfo"></a>

```csharp
public GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList CertInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList</a>

---

##### `CertInfoInput`<sup>Optional</sup> <a name="CertInfoInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.certInfoInput"></a>

```csharp
public object CertInfoInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

---


### GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference <a name="GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




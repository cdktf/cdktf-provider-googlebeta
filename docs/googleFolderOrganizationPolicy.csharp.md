# `googleFolderOrganizationPolicy` Submodule <a name="`googleFolderOrganizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFolderOrganizationPolicy <a name="GoogleFolderOrganizationPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy google_folder_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFolderOrganizationPolicy(Construct Scope, string Id, GoogleFolderOrganizationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig">GoogleFolderOrganizationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig">GoogleFolderOrganizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putBooleanPolicy">PutBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy">PutListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putRestorePolicy">PutRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetBooleanPolicy">ResetBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetListPolicy">ResetListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetRestorePolicy">ResetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBooleanPolicy` <a name="PutBooleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putBooleanPolicy"></a>

```csharp
private void PutBooleanPolicy(GoogleFolderOrganizationPolicyBooleanPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putBooleanPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

---

##### `PutListPolicy` <a name="PutListPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy"></a>

```csharp
private void PutListPolicy(GoogleFolderOrganizationPolicyListPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

---

##### `PutRestorePolicy` <a name="PutRestorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putRestorePolicy"></a>

```csharp
private void PutRestorePolicy(GoogleFolderOrganizationPolicyRestorePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleFolderOrganizationPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>

---

##### `ResetBooleanPolicy` <a name="ResetBooleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetBooleanPolicy"></a>

```csharp
private void ResetBooleanPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetListPolicy` <a name="ResetListPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetListPolicy"></a>

```csharp
private void ResetListPolicy()
```

##### `ResetRestorePolicy` <a name="ResetRestorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetRestorePolicy"></a>

```csharp
private void ResetRestorePolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFolderOrganizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFolderOrganizationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFolderOrganizationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFolderOrganizationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFolderOrganizationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleFolderOrganizationPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFolderOrganizationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFolderOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFolderOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicy">BooleanPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference">GoogleFolderOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicy">ListPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference">GoogleFolderOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference">GoogleFolderOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference">GoogleFolderOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicyInput">BooleanPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraintInput">ConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicyInput">ListPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicyInput">RestorePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraint">Constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.version">Version</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BooleanPolicy`<sup>Required</sup> <a name="BooleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicy"></a>

```csharp
public GoogleFolderOrganizationPolicyBooleanPolicyOutputReference BooleanPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference">GoogleFolderOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ListPolicy`<sup>Required</sup> <a name="ListPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicy"></a>

```csharp
public GoogleFolderOrganizationPolicyListPolicyOutputReference ListPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference">GoogleFolderOrganizationPolicyListPolicyOutputReference</a>

---

##### `RestorePolicy`<sup>Required</sup> <a name="RestorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicy"></a>

```csharp
public GoogleFolderOrganizationPolicyRestorePolicyOutputReference RestorePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference">GoogleFolderOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeouts"></a>

```csharp
public GoogleFolderOrganizationPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference">GoogleFolderOrganizationPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BooleanPolicyInput`<sup>Optional</sup> <a name="BooleanPolicyInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicyInput"></a>

```csharp
public GoogleFolderOrganizationPolicyBooleanPolicy BooleanPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraintInput"></a>

```csharp
public string ConstraintInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListPolicyInput`<sup>Optional</sup> <a name="ListPolicyInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicyInput"></a>

```csharp
public GoogleFolderOrganizationPolicyListPolicy ListPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

---

##### `RestorePolicyInput`<sup>Optional</sup> <a name="RestorePolicyInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicyInput"></a>

```csharp
public GoogleFolderOrganizationPolicyRestorePolicy RestorePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraint"></a>

```csharp
public string Constraint { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFolderOrganizationPolicyBooleanPolicy <a name="GoogleFolderOrganizationPolicyBooleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFolderOrganizationPolicyBooleanPolicy {
    object Enforced
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy.property.enforced">Enforced</a></code> | <code>object</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy.property.enforced"></a>

```csharp
public object Enforced { get; set; }
```

- *Type:* object

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#enforced GoogleFolderOrganizationPolicy#enforced}

---

### GoogleFolderOrganizationPolicyConfig <a name="GoogleFolderOrganizationPolicyConfig" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFolderOrganizationPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Constraint,
    string Folder,
    GoogleFolderOrganizationPolicyBooleanPolicy BooleanPolicy = null,
    string Id = null,
    GoogleFolderOrganizationPolicyListPolicy ListPolicy = null,
    GoogleFolderOrganizationPolicyRestorePolicy RestorePolicy = null,
    GoogleFolderOrganizationPolicyTimeouts Timeouts = null,
    double Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.constraint">Constraint</a></code> | <code>string</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.folder">Folder</a></code> | <code>string</code> | The resource name of the folder to set the policy for. Its format is folders/{folder_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.booleanPolicy">BooleanPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#id GoogleFolderOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.listPolicy">ListPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.version">Version</a></code> | <code>double</code> | Version of the Policy. Default version is 0. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.constraint"></a>

```csharp
public string Constraint { get; set; }
```

- *Type:* string

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#constraint GoogleFolderOrganizationPolicy#constraint}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The resource name of the folder to set the policy for. Its format is folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#folder GoogleFolderOrganizationPolicy#folder}

---

##### `BooleanPolicy`<sup>Optional</sup> <a name="BooleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.booleanPolicy"></a>

```csharp
public GoogleFolderOrganizationPolicyBooleanPolicy BooleanPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#boolean_policy GoogleFolderOrganizationPolicy#boolean_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#id GoogleFolderOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ListPolicy`<sup>Optional</sup> <a name="ListPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.listPolicy"></a>

```csharp
public GoogleFolderOrganizationPolicyListPolicy ListPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#list_policy GoogleFolderOrganizationPolicy#list_policy}

---

##### `RestorePolicy`<sup>Optional</sup> <a name="RestorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.restorePolicy"></a>

```csharp
public GoogleFolderOrganizationPolicyRestorePolicy RestorePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#restore_policy GoogleFolderOrganizationPolicy#restore_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.timeouts"></a>

```csharp
public GoogleFolderOrganizationPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#timeouts GoogleFolderOrganizationPolicy#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#version GoogleFolderOrganizationPolicy#version}

---

### GoogleFolderOrganizationPolicyListPolicy <a name="GoogleFolderOrganizationPolicyListPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFolderOrganizationPolicyListPolicy {
    GoogleFolderOrganizationPolicyListPolicyAllow Allow = null,
    GoogleFolderOrganizationPolicyListPolicyDeny Deny = null,
    object InheritFromParent = null,
    string SuggestedValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.inheritFromParent">InheritFromParent</a></code> | <code>object</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.suggestedValue">SuggestedValue</a></code> | <code>string</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.allow"></a>

```csharp
public GoogleFolderOrganizationPolicyListPolicyAllow Allow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#allow GoogleFolderOrganizationPolicy#allow}

---

##### `Deny`<sup>Optional</sup> <a name="Deny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.deny"></a>

```csharp
public GoogleFolderOrganizationPolicyListPolicyDeny Deny { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#deny GoogleFolderOrganizationPolicy#deny}

---

##### `InheritFromParent`<sup>Optional</sup> <a name="InheritFromParent" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```csharp
public object InheritFromParent { get; set; }
```

- *Type:* object

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#inherit_from_parent GoogleFolderOrganizationPolicy#inherit_from_parent}

---

##### `SuggestedValue`<sup>Optional</sup> <a name="SuggestedValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.suggestedValue"></a>

```csharp
public string SuggestedValue { get; set; }
```

- *Type:* string

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#suggested_value GoogleFolderOrganizationPolicy#suggested_value}

---

### GoogleFolderOrganizationPolicyListPolicyAllow <a name="GoogleFolderOrganizationPolicyListPolicyAllow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFolderOrganizationPolicyListPolicyAllow {
    object All = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.all">All</a></code> | <code>object</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.values">Values</a></code> | <code>string[]</code> | The policy can define specific values that are allowed or denied. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.all"></a>

```csharp
public object All { get; set; }
```

- *Type:* object

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#all GoogleFolderOrganizationPolicy#all}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#values GoogleFolderOrganizationPolicy#values}

---

### GoogleFolderOrganizationPolicyListPolicyDeny <a name="GoogleFolderOrganizationPolicyListPolicyDeny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFolderOrganizationPolicyListPolicyDeny {
    object All = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.all">All</a></code> | <code>object</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.values">Values</a></code> | <code>string[]</code> | The policy can define specific values that are allowed or denied. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.all"></a>

```csharp
public object All { get; set; }
```

- *Type:* object

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#all GoogleFolderOrganizationPolicy#all}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#values GoogleFolderOrganizationPolicy#values}

---

### GoogleFolderOrganizationPolicyRestorePolicy <a name="GoogleFolderOrganizationPolicyRestorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFolderOrganizationPolicyRestorePolicy {
    object Default
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy.property.default">Default</a></code> | <code>object</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy.property.default"></a>

```csharp
public object Default { get; set; }
```

- *Type:* object

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#default GoogleFolderOrganizationPolicy#default}

---

### GoogleFolderOrganizationPolicyTimeouts <a name="GoogleFolderOrganizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFolderOrganizationPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#create GoogleFolderOrganizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#delete GoogleFolderOrganizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#read GoogleFolderOrganizationPolicy#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#update GoogleFolderOrganizationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#create GoogleFolderOrganizationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#delete GoogleFolderOrganizationPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#read GoogleFolderOrganizationPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_folder_organization_policy#update GoogleFolderOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFolderOrganizationPolicyBooleanPolicyOutputReference <a name="GoogleFolderOrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFolderOrganizationPolicyBooleanPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">EnforcedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced">Enforced</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforcedInput`<sup>Optional</sup> <a name="EnforcedInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```csharp
public object EnforcedInput { get; }
```

- *Type:* object

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```csharp
public object Enforced { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleFolderOrganizationPolicyBooleanPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

---


### GoogleFolderOrganizationPolicyListPolicyAllowOutputReference <a name="GoogleFolderOrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFolderOrganizationPolicyListPolicyAllowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.allInput">AllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.all">All</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```csharp
public object AllInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```csharp
public object All { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```csharp
public GoogleFolderOrganizationPolicyListPolicyAllow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

---


### GoogleFolderOrganizationPolicyListPolicyDenyOutputReference <a name="GoogleFolderOrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFolderOrganizationPolicyListPolicyDenyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.allInput">AllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.all">All</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```csharp
public object AllInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```csharp
public object All { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```csharp
public GoogleFolderOrganizationPolicyListPolicyDeny InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

---


### GoogleFolderOrganizationPolicyListPolicyOutputReference <a name="GoogleFolderOrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFolderOrganizationPolicyListPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putDeny">PutDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetDeny">ResetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">ResetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">ResetSuggestedValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllow` <a name="PutAllow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```csharp
private void PutAllow(GoogleFolderOrganizationPolicyListPolicyAllow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

---

##### `PutDeny` <a name="PutDeny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```csharp
private void PutDeny(GoogleFolderOrganizationPolicyListPolicyDeny Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```csharp
private void ResetAllow()
```

##### `ResetDeny` <a name="ResetDeny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```csharp
private void ResetDeny()
```

##### `ResetInheritFromParent` <a name="ResetInheritFromParent" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```csharp
private void ResetInheritFromParent()
```

##### `ResetSuggestedValue` <a name="ResetSuggestedValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```csharp
private void ResetSuggestedValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference">GoogleFolderOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference">GoogleFolderOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allowInput">AllowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.denyInput">DenyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">InheritFromParentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">SuggestedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">InheritFromParent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue">SuggestedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```csharp
public GoogleFolderOrganizationPolicyListPolicyAllowOutputReference Allow { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference">GoogleFolderOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```csharp
public GoogleFolderOrganizationPolicyListPolicyDenyOutputReference Deny { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference">GoogleFolderOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```csharp
public GoogleFolderOrganizationPolicyListPolicyAllow AllowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

---

##### `DenyInput`<sup>Optional</sup> <a name="DenyInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```csharp
public GoogleFolderOrganizationPolicyListPolicyDeny DenyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

---

##### `InheritFromParentInput`<sup>Optional</sup> <a name="InheritFromParentInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```csharp
public object InheritFromParentInput { get; }
```

- *Type:* object

---

##### `SuggestedValueInput`<sup>Optional</sup> <a name="SuggestedValueInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```csharp
public string SuggestedValueInput { get; }
```

- *Type:* string

---

##### `InheritFromParent`<sup>Required</sup> <a name="InheritFromParent" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```csharp
public object InheritFromParent { get; }
```

- *Type:* object

---

##### `SuggestedValue`<sup>Required</sup> <a name="SuggestedValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```csharp
public string SuggestedValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleFolderOrganizationPolicyListPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

---


### GoogleFolderOrganizationPolicyRestorePolicyOutputReference <a name="GoogleFolderOrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFolderOrganizationPolicyRestorePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">DefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.default">Default</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```csharp
public object DefaultInput { get; }
```

- *Type:* object

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```csharp
public object Default { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleFolderOrganizationPolicyRestorePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

---


### GoogleFolderOrganizationPolicyTimeoutsOutputReference <a name="GoogleFolderOrganizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFolderOrganizationPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




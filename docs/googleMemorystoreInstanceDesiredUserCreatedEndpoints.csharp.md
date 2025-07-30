# `googleMemorystoreInstanceDesiredUserCreatedEndpoints` Submodule <a name="`googleMemorystoreInstanceDesiredUserCreatedEndpoints` Submodule" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMemorystoreInstanceDesiredUserCreatedEndpoints <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints google_memorystore_instance_desired_user_created_endpoints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMemorystoreInstanceDesiredUserCreatedEndpoints(Construct Scope, string Id, GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints">PutDesiredUserCreatedEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetDesiredUserCreatedEndpoints">ResetDesiredUserCreatedEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDesiredUserCreatedEndpoints` <a name="PutDesiredUserCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints"></a>

```csharp
private void PutDesiredUserCreatedEndpoints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>

---

##### `ResetDesiredUserCreatedEndpoints` <a name="ResetDesiredUserCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetDesiredUserCreatedEndpoints"></a>

```csharp
private void ResetDesiredUserCreatedEndpoints()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMemorystoreInstanceDesiredUserCreatedEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleMemorystoreInstanceDesiredUserCreatedEndpoints resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMemorystoreInstanceDesiredUserCreatedEndpoints to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMemorystoreInstanceDesiredUserCreatedEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMemorystoreInstanceDesiredUserCreatedEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpoints">DesiredUserCreatedEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpointsInput">DesiredUserCreatedEndpointsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DesiredUserCreatedEndpoints`<sup>Required</sup> <a name="DesiredUserCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpoints"></a>

```csharp
public GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList DesiredUserCreatedEndpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.timeouts"></a>

```csharp
public GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference</a>

---

##### `DesiredUserCreatedEndpointsInput`<sup>Optional</sup> <a name="DesiredUserCreatedEndpointsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpointsInput"></a>

```csharp
public object DesiredUserCreatedEndpointsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Region,
    object DesiredUserCreatedEndpoints = null,
    string Id = null,
    string Project = null,
    GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.name">Name</a></code> | <code>string</code> | The name of the Memorystore instance these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.region">Region</a></code> | <code>string</code> | The name of the region of the Memorystore instance these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.desiredUserCreatedEndpoints">DesiredUserCreatedEndpoints</a></code> | <code>object</code> | desired_user_created_endpoints block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#project GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Memorystore instance these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#name GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The name of the region of the Memorystore instance these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#region GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#region}

---

##### `DesiredUserCreatedEndpoints`<sup>Optional</sup> <a name="DesiredUserCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.desiredUserCreatedEndpoints"></a>

```csharp
public object DesiredUserCreatedEndpoints { get; set; }
```

- *Type:* object

desired_user_created_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#desired_user_created_endpoints GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#desired_user_created_endpoints}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#project GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.timeouts"></a>

```csharp
public GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#timeouts GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#timeouts}

---

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints {
    object Connections = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.property.connections">Connections</a></code> | <code>object</code> | connections block. |

---

##### `Connections`<sup>Optional</sup> <a name="Connections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.property.connections"></a>

```csharp
public object Connections { get; set; }
```

- *Type:* object

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#connections GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#connections}

---

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections {
    GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection PscConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.property.pscConnection">PscConnection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | psc_connection block. |

---

##### `PscConnection`<sup>Optional</sup> <a name="PscConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.property.pscConnection"></a>

```csharp
public GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection PscConnection { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

psc_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#psc_connection GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#psc_connection}

---

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection {
    string ForwardingRule,
    string IpAddress,
    string Network,
    string PscConnectionId,
    string ServiceAttachment,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.forwardingRule">ForwardingRule</a></code> | <code>string</code> | The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.ipAddress">IpAddress</a></code> | <code>string</code> | The IP allocated on the consumer network for the PSC forwarding rule. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.network">Network</a></code> | <code>string</code> | The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.pscConnectionId">PscConnectionId</a></code> | <code>string</code> | The PSC connection id of the forwarding rule connected to the service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.serviceAttachment">ServiceAttachment</a></code> | <code>string</code> | The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.projectId">ProjectId</a></code> | <code>string</code> | The consumer project_id where the forwarding rule is created from. |

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.forwardingRule"></a>

```csharp
public string ForwardingRule { get; set; }
```

- *Type:* string

The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#forwarding_rule GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#forwarding_rule}

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

The IP allocated on the consumer network for the PSC forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#ip_address GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#ip_address}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#network GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#network}

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.pscConnectionId"></a>

```csharp
public string PscConnectionId { get; set; }
```

- *Type:* string

The PSC connection id of the forwarding rule connected to the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#psc_connection_id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#psc_connection_id}

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.serviceAttachment"></a>

```csharp
public string ServiceAttachment { get; set; }
```

- *Type:* string

The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#service_attachment GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#service_attachment}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#project_id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#project_id}

---

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#create GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#delete GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#update GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#create GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#delete GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#update GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get"></a>

```csharp
private GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection">PutPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resetPscConnection">ResetPscConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPscConnection` <a name="PutPscConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection"></a>

```csharp
private void PutPscConnection(GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

---

##### `ResetPscConnection` <a name="ResetPscConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resetPscConnection"></a>

```csharp
private void ResetPscConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnection">PscConnection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnectionInput">PscConnectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PscConnection`<sup>Required</sup> <a name="PscConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnection"></a>

```csharp
public GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference PscConnection { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference</a>

---

##### `PscConnectionInput`<sup>Optional</sup> <a name="PscConnectionInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnectionInput"></a>

```csharp
public GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection PscConnectionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus">PscConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput">ForwardingRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput">PscConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput">ServiceAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `PscConnectionStatus`<sup>Required</sup> <a name="PscConnectionStatus" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus"></a>

```csharp
public string PscConnectionStatus { get; }
```

- *Type:* string

---

##### `ForwardingRuleInput`<sup>Optional</sup> <a name="ForwardingRuleInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput"></a>

```csharp
public string ForwardingRuleInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `PscConnectionIdInput`<sup>Optional</sup> <a name="PscConnectionIdInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput"></a>

```csharp
public string PscConnectionIdInput { get; }
```

- *Type:* string

---

##### `ServiceAttachmentInput`<sup>Optional</sup> <a name="ServiceAttachmentInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput"></a>

```csharp
public string ServiceAttachmentInput { get; }
```

- *Type:* string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule"></a>

```csharp
public string ForwardingRule { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId"></a>

```csharp
public string PscConnectionId { get; }
```

- *Type:* string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment"></a>

```csharp
public string ServiceAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.internalValue"></a>

```csharp
public GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get"></a>

```csharp
private GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections">PutConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resetConnections">ResetConnections</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnections` <a name="PutConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections"></a>

```csharp
private void PutConnections(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections.parameter.value"></a>

- *Type:* object

---

##### `ResetConnections` <a name="ResetConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resetConnections"></a>

```csharp
private void ResetConnections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connectionsInput">ConnectionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connections"></a>

```csharp
public GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList Connections { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList</a>

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connectionsInput"></a>

```csharp
public object ConnectionsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




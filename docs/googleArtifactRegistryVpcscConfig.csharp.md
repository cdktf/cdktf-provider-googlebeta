# `googleArtifactRegistryVpcscConfig` Submodule <a name="`googleArtifactRegistryVpcscConfig` Submodule" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleArtifactRegistryVpcscConfig <a name="GoogleArtifactRegistryVpcscConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config google_artifact_registry_vpcsc_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryVpcscConfig(Construct Scope, string Id, GoogleArtifactRegistryVpcscConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig">GoogleArtifactRegistryVpcscConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig">GoogleArtifactRegistryVpcscConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.resetVpcscPolicy">ResetVpcscPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleArtifactRegistryVpcscConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeouts">GoogleArtifactRegistryVpcscConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpcscPolicy` <a name="ResetVpcscPolicy" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.resetVpcscPolicy"></a>

```csharp
private void ResetVpcscPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleArtifactRegistryVpcscConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleArtifactRegistryVpcscConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleArtifactRegistryVpcscConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleArtifactRegistryVpcscConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleArtifactRegistryVpcscConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleArtifactRegistryVpcscConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleArtifactRegistryVpcscConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleArtifactRegistryVpcscConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleArtifactRegistryVpcscConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference">GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.vpcscPolicyInput">VpcscPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.vpcscPolicy">VpcscPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.timeouts"></a>

```csharp
public GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference">GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcscPolicyInput`<sup>Optional</sup> <a name="VpcscPolicyInput" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.vpcscPolicyInput"></a>

```csharp
public string VpcscPolicyInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `VpcscPolicy`<sup>Required</sup> <a name="VpcscPolicy" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.vpcscPolicy"></a>

```csharp
public string VpcscPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleArtifactRegistryVpcscConfigConfig <a name="GoogleArtifactRegistryVpcscConfigConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryVpcscConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Location = null,
    string Project = null,
    GoogleArtifactRegistryVpcscConfigTimeouts Timeouts = null,
    string VpcscPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config#id GoogleArtifactRegistryVpcscConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.location">Location</a></code> | <code>string</code> | The name of the location this config is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config#project GoogleArtifactRegistryVpcscConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeouts">GoogleArtifactRegistryVpcscConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.vpcscPolicy">VpcscPolicy</a></code> | <code>string</code> | The VPC SC policy for project and location. Possible values: ["DENY", "ALLOW"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config#id GoogleArtifactRegistryVpcscConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the location this config is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config#location GoogleArtifactRegistryVpcscConfig#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config#project GoogleArtifactRegistryVpcscConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.timeouts"></a>

```csharp
public GoogleArtifactRegistryVpcscConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeouts">GoogleArtifactRegistryVpcscConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config#timeouts GoogleArtifactRegistryVpcscConfig#timeouts}

---

##### `VpcscPolicy`<sup>Optional</sup> <a name="VpcscPolicy" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigConfig.property.vpcscPolicy"></a>

```csharp
public string VpcscPolicy { get; set; }
```

- *Type:* string

The VPC SC policy for project and location. Possible values: ["DENY", "ALLOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config#vpcsc_policy GoogleArtifactRegistryVpcscConfig#vpcsc_policy}

---

### GoogleArtifactRegistryVpcscConfigTimeouts <a name="GoogleArtifactRegistryVpcscConfigTimeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryVpcscConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config#create GoogleArtifactRegistryVpcscConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config#delete GoogleArtifactRegistryVpcscConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config#update GoogleArtifactRegistryVpcscConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config#create GoogleArtifactRegistryVpcscConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config#delete GoogleArtifactRegistryVpcscConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_artifact_registry_vpcsc_config#update GoogleArtifactRegistryVpcscConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference <a name="GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryVpcscConfig.GoogleArtifactRegistryVpcscConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




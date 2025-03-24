# `googleComputeHttpsHealthCheck` Submodule <a name="`googleComputeHttpsHealthCheck` Submodule" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeHttpsHealthCheck <a name="GoogleComputeHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check google_compute_https_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHttpsHealthCheck(Construct Scope, string Id, GoogleComputeHttpsHealthCheckConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig">GoogleComputeHttpsHealthCheckConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig">GoogleComputeHttpsHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetCheckIntervalSec">ResetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetTimeoutSec">ResetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeHttpsHealthCheckTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts">GoogleComputeHttpsHealthCheckTimeouts</a>

---

##### `ResetCheckIntervalSec` <a name="ResetCheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetCheckIntervalSec"></a>

```csharp
private void ResetCheckIntervalSec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetHealthyThreshold"></a>

```csharp
private void ResetHealthyThreshold()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetRequestPath"></a>

```csharp
private void ResetRequestPath()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeoutSec` <a name="ResetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetTimeoutSec"></a>

```csharp
private void ResetTimeoutSec()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetUnhealthyThreshold"></a>

```csharp
private void ResetUnhealthyThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeHttpsHealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeHttpsHealthCheck.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeHttpsHealthCheck.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeHttpsHealthCheck.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeHttpsHealthCheck.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeHttpsHealthCheck resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeHttpsHealthCheck to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeHttpsHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeHttpsHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference">GoogleComputeHttpsHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.checkIntervalSecInput">CheckIntervalSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.requestPathInput">RequestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeoutSecInput">TimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.requestPath">RequestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeoutSec">TimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeouts"></a>

```csharp
public GoogleComputeHttpsHealthCheckTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference">GoogleComputeHttpsHealthCheckTimeoutsOutputReference</a>

---

##### `CheckIntervalSecInput`<sup>Optional</sup> <a name="CheckIntervalSecInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.checkIntervalSecInput"></a>

```csharp
public double CheckIntervalSecInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.healthyThresholdInput"></a>

```csharp
public double HealthyThresholdInput { get; }
```

- *Type:* double

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.requestPathInput"></a>

```csharp
public string RequestPathInput { get; }
```

- *Type:* string

---

##### `TimeoutSecInput`<sup>Optional</sup> <a name="TimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeoutSecInput"></a>

```csharp
public double TimeoutSecInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.unhealthyThresholdInput"></a>

```csharp
public double UnhealthyThresholdInput { get; }
```

- *Type:* double

---

##### `CheckIntervalSec`<sup>Required</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.checkIntervalSec"></a>

```csharp
public double CheckIntervalSec { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.requestPath"></a>

```csharp
public string RequestPath { get; }
```

- *Type:* string

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeoutSec"></a>

```csharp
public double TimeoutSec { get; }
```

- *Type:* double

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeHttpsHealthCheckConfig <a name="GoogleComputeHttpsHealthCheckConfig" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHttpsHealthCheckConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double CheckIntervalSec = null,
    string Description = null,
    double HealthyThreshold = null,
    string Host = null,
    string Id = null,
    double Port = null,
    string Project = null,
    string RequestPath = null,
    GoogleComputeHttpsHealthCheckTimeouts Timeouts = null,
    double TimeoutSec = null,
    double UnhealthyThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>double</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.host">Host</a></code> | <code>string</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#id GoogleComputeHttpsHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.port">Port</a></code> | <code>double</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#project GoogleComputeHttpsHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.requestPath">RequestPath</a></code> | <code>string</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts">GoogleComputeHttpsHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.timeoutSec">TimeoutSec</a></code> | <code>double</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#name GoogleComputeHttpsHealthCheck#name}

---

##### `CheckIntervalSec`<sup>Optional</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.checkIntervalSec"></a>

```csharp
public double CheckIntervalSec { get; set; }
```

- *Type:* double

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#check_interval_sec GoogleComputeHttpsHealthCheck#check_interval_sec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#description GoogleComputeHttpsHealthCheck#description}

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; set; }
```

- *Type:* double

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#healthy_threshold GoogleComputeHttpsHealthCheck#healthy_threshold}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The value of the host header in the HTTPS health check request.

If
left empty (default value), the public IP on behalf of which this
health check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#host GoogleComputeHttpsHealthCheck#host}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#id GoogleComputeHttpsHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#port GoogleComputeHttpsHealthCheck#port}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#project GoogleComputeHttpsHealthCheck#project}.

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.requestPath"></a>

```csharp
public string RequestPath { get; set; }
```

- *Type:* string

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#request_path GoogleComputeHttpsHealthCheck#request_path}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.timeouts"></a>

```csharp
public GoogleComputeHttpsHealthCheckTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts">GoogleComputeHttpsHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#timeouts GoogleComputeHttpsHealthCheck#timeouts}

---

##### `TimeoutSec`<sup>Optional</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.timeoutSec"></a>

```csharp
public double TimeoutSec { get; set; }
```

- *Type:* double

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#timeout_sec GoogleComputeHttpsHealthCheck#timeout_sec}

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; set; }
```

- *Type:* double

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#unhealthy_threshold GoogleComputeHttpsHealthCheck#unhealthy_threshold}

---

### GoogleComputeHttpsHealthCheckTimeouts <a name="GoogleComputeHttpsHealthCheckTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHttpsHealthCheckTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#create GoogleComputeHttpsHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#delete GoogleComputeHttpsHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#update GoogleComputeHttpsHealthCheck#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#create GoogleComputeHttpsHealthCheck#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#delete GoogleComputeHttpsHealthCheck#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_https_health_check#update GoogleComputeHttpsHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeHttpsHealthCheckTimeoutsOutputReference <a name="GoogleComputeHttpsHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHttpsHealthCheckTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




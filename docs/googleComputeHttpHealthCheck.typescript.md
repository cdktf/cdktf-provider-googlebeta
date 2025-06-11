# `googleComputeHttpHealthCheck` Submodule <a name="`googleComputeHttpHealthCheck` Submodule" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeHttpHealthCheck <a name="GoogleComputeHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check google_compute_http_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer"></a>

```typescript
import { googleComputeHttpHealthCheck } from '@cdktf/provider-google-beta'

new googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck(scope: Construct, id: string, config: GoogleComputeHttpHealthCheckConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig">GoogleComputeHttpHealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig">GoogleComputeHttpHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetCheckIntervalSec">resetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetTimeoutSec">resetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeHttpHealthCheckTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a>

---

##### `resetCheckIntervalSec` <a name="resetCheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetCheckIntervalSec"></a>

```typescript
public resetCheckIntervalSec(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetHealthyThreshold"></a>

```typescript
public resetHealthyThreshold(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetRequestPath"></a>

```typescript
public resetRequestPath(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeoutSec` <a name="resetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetTimeoutSec"></a>

```typescript
public resetTimeoutSec(): void
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetUnhealthyThreshold"></a>

```typescript
public resetUnhealthyThreshold(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeHttpHealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isConstruct"></a>

```typescript
import { googleComputeHttpHealthCheck } from '@cdktf/provider-google-beta'

googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformElement"></a>

```typescript
import { googleComputeHttpHealthCheck } from '@cdktf/provider-google-beta'

googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformResource"></a>

```typescript
import { googleComputeHttpHealthCheck } from '@cdktf/provider-google-beta'

googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport"></a>

```typescript
import { googleComputeHttpHealthCheck } from '@cdktf/provider-google-beta'

googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeHttpHealthCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeHttpHealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeHttpHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeHttpHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference">GoogleComputeHttpHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.checkIntervalSecInput">checkIntervalSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.requestPathInput">requestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutSecInput">timeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.checkIntervalSec">checkIntervalSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.requestPath">requestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutSec">timeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeHttpHealthCheckTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference">GoogleComputeHttpHealthCheckTimeoutsOutputReference</a>

---

##### `checkIntervalSecInput`<sup>Optional</sup> <a name="checkIntervalSecInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.checkIntervalSecInput"></a>

```typescript
public readonly checkIntervalSecInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.healthyThresholdInput"></a>

```typescript
public readonly healthyThresholdInput: number;
```

- *Type:* number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.requestPathInput"></a>

```typescript
public readonly requestPathInput: string;
```

- *Type:* string

---

##### `timeoutSecInput`<sup>Optional</sup> <a name="timeoutSecInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutSecInput"></a>

```typescript
public readonly timeoutSecInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeHttpHealthCheckTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a>

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.unhealthyThresholdInput"></a>

```typescript
public readonly unhealthyThresholdInput: number;
```

- *Type:* number

---

##### `checkIntervalSec`<sup>Required</sup> <a name="checkIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.checkIntervalSec"></a>

```typescript
public readonly checkIntervalSec: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutSec"></a>

```typescript
public readonly timeoutSec: number;
```

- *Type:* number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeHttpHealthCheckConfig <a name="GoogleComputeHttpHealthCheckConfig" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.Initializer"></a>

```typescript
import { googleComputeHttpHealthCheck } from '@cdktf/provider-google-beta'

const googleComputeHttpHealthCheckConfig: googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.checkIntervalSec">checkIntervalSec</a></code> | <code>number</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.host">host</a></code> | <code>string</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#id GoogleComputeHttpHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.port">port</a></code> | <code>number</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#project GoogleComputeHttpHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.requestPath">requestPath</a></code> | <code>string</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.timeoutSec">timeoutSec</a></code> | <code>number</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#name GoogleComputeHttpHealthCheck#name}

---

##### `checkIntervalSec`<sup>Optional</sup> <a name="checkIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.checkIntervalSec"></a>

```typescript
public readonly checkIntervalSec: number;
```

- *Type:* number

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#check_interval_sec GoogleComputeHttpHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#description GoogleComputeHttpHealthCheck#description}

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#healthy_threshold GoogleComputeHttpHealthCheck#healthy_threshold}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The value of the host header in the HTTP health check request.

If
left empty (default value), the public IP on behalf of which this
health check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#host GoogleComputeHttpHealthCheck#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#id GoogleComputeHttpHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#port GoogleComputeHttpHealthCheck#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#project GoogleComputeHttpHealthCheck#project}.

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#request_path GoogleComputeHttpHealthCheck#request_path}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeHttpHealthCheckTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#timeouts GoogleComputeHttpHealthCheck#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.timeoutSec"></a>

```typescript
public readonly timeoutSec: number;
```

- *Type:* number

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#timeout_sec GoogleComputeHttpHealthCheck#timeout_sec}

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#unhealthy_threshold GoogleComputeHttpHealthCheck#unhealthy_threshold}

---

### GoogleComputeHttpHealthCheckTimeouts <a name="GoogleComputeHttpHealthCheckTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.Initializer"></a>

```typescript
import { googleComputeHttpHealthCheck } from '@cdktf/provider-google-beta'

const googleComputeHttpHealthCheckTimeouts: googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#create GoogleComputeHttpHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#delete GoogleComputeHttpHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#update GoogleComputeHttpHealthCheck#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#create GoogleComputeHttpHealthCheck#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#delete GoogleComputeHttpHealthCheck#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_http_health_check#update GoogleComputeHttpHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeHttpHealthCheckTimeoutsOutputReference <a name="GoogleComputeHttpHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeHttpHealthCheck } from '@cdktf/provider-google-beta'

new googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeHttpHealthCheckTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a>

---




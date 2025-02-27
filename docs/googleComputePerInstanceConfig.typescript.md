# `googleComputePerInstanceConfig` Submodule <a name="`googleComputePerInstanceConfig` Submodule" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputePerInstanceConfig <a name="GoogleComputePerInstanceConfig" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config google_compute_per_instance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputePerInstanceConfig.GoogleComputePerInstanceConfig(scope: Construct, id: string, config: GoogleComputePerInstanceConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig">GoogleComputePerInstanceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig">GoogleComputePerInstanceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putPreservedState">putPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetMinimalAction">resetMinimalAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetMostDisruptiveAllowedAction">resetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetPreservedState">resetPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetRemoveInstanceOnDestroy">resetRemoveInstanceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetRemoveInstanceStateOnDestroy">resetRemoveInstanceStateOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPreservedState` <a name="putPreservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putPreservedState"></a>

```typescript
public putPreservedState(value: GoogleComputePerInstanceConfigPreservedState): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putPreservedState.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputePerInstanceConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMinimalAction` <a name="resetMinimalAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetMinimalAction"></a>

```typescript
public resetMinimalAction(): void
```

##### `resetMostDisruptiveAllowedAction` <a name="resetMostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetMostDisruptiveAllowedAction"></a>

```typescript
public resetMostDisruptiveAllowedAction(): void
```

##### `resetPreservedState` <a name="resetPreservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetPreservedState"></a>

```typescript
public resetPreservedState(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRemoveInstanceOnDestroy` <a name="resetRemoveInstanceOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetRemoveInstanceOnDestroy"></a>

```typescript
public resetRemoveInstanceOnDestroy(): void
```

##### `resetRemoveInstanceStateOnDestroy` <a name="resetRemoveInstanceStateOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetRemoveInstanceStateOnDestroy"></a>

```typescript
public resetRemoveInstanceStateOnDestroy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputePerInstanceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isConstruct"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformElement"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformResource"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputePerInstanceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputePerInstanceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputePerInstanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputePerInstanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.preservedState">preservedState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference">GoogleComputePerInstanceConfigPreservedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference">GoogleComputePerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.instanceGroupManagerInput">instanceGroupManagerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.minimalActionInput">minimalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.mostDisruptiveAllowedActionInput">mostDisruptiveAllowedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.preservedStateInput">preservedStateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceOnDestroyInput">removeInstanceOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceStateOnDestroyInput">removeInstanceStateOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.instanceGroupManager">instanceGroupManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.minimalAction">minimalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceOnDestroy">removeInstanceOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceStateOnDestroy">removeInstanceStateOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `preservedState`<sup>Required</sup> <a name="preservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.preservedState"></a>

```typescript
public readonly preservedState: GoogleComputePerInstanceConfigPreservedStateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference">GoogleComputePerInstanceConfigPreservedStateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputePerInstanceConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference">GoogleComputePerInstanceConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceGroupManagerInput`<sup>Optional</sup> <a name="instanceGroupManagerInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.instanceGroupManagerInput"></a>

```typescript
public readonly instanceGroupManagerInput: string;
```

- *Type:* string

---

##### `minimalActionInput`<sup>Optional</sup> <a name="minimalActionInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.minimalActionInput"></a>

```typescript
public readonly minimalActionInput: string;
```

- *Type:* string

---

##### `mostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="mostDisruptiveAllowedActionInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.mostDisruptiveAllowedActionInput"></a>

```typescript
public readonly mostDisruptiveAllowedActionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `preservedStateInput`<sup>Optional</sup> <a name="preservedStateInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.preservedStateInput"></a>

```typescript
public readonly preservedStateInput: GoogleComputePerInstanceConfigPreservedState;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `removeInstanceOnDestroyInput`<sup>Optional</sup> <a name="removeInstanceOnDestroyInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceOnDestroyInput"></a>

```typescript
public readonly removeInstanceOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `removeInstanceStateOnDestroyInput`<sup>Optional</sup> <a name="removeInstanceStateOnDestroyInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceStateOnDestroyInput"></a>

```typescript
public readonly removeInstanceStateOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputePerInstanceConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.instanceGroupManager"></a>

```typescript
public readonly instanceGroupManager: string;
```

- *Type:* string

---

##### `minimalAction`<sup>Required</sup> <a name="minimalAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.minimalAction"></a>

```typescript
public readonly minimalAction: string;
```

- *Type:* string

---

##### `mostDisruptiveAllowedAction`<sup>Required</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.mostDisruptiveAllowedAction"></a>

```typescript
public readonly mostDisruptiveAllowedAction: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `removeInstanceOnDestroy`<sup>Required</sup> <a name="removeInstanceOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceOnDestroy"></a>

```typescript
public readonly removeInstanceOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `removeInstanceStateOnDestroy`<sup>Required</sup> <a name="removeInstanceStateOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceStateOnDestroy"></a>

```typescript
public readonly removeInstanceStateOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputePerInstanceConfigConfig <a name="GoogleComputePerInstanceConfigConfig" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputePerInstanceConfigConfig: googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.instanceGroupManager">instanceGroupManager</a></code> | <code>string</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.name">name</a></code> | <code>string</code> | The name for this per-instance config and its corresponding instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#id GoogleComputePerInstanceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.minimalAction">minimalAction</a></code> | <code>string</code> | The minimal action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>string</code> | The most disruptive action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.preservedState">preservedState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a></code> | preserved_state block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#project GoogleComputePerInstanceConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.removeInstanceOnDestroy">removeInstanceOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, deleting this config will immediately remove the underlying instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.removeInstanceStateOnDestroy">removeInstanceStateOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, deleting this config will immediately remove any specified state from the underlying instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.zone">zone</a></code> | <code>string</code> | Zone where the containing instance group manager is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.instanceGroupManager"></a>

```typescript
public readonly instanceGroupManager: string;
```

- *Type:* string

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#instance_group_manager GoogleComputePerInstanceConfig#instance_group_manager}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#name GoogleComputePerInstanceConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#id GoogleComputePerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimalAction`<sup>Optional</sup> <a name="minimalAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.minimalAction"></a>

```typescript
public readonly minimalAction: string;
```

- *Type:* string

The minimal action to perform on the instance during an update.

Default is 'NONE'. Possible values are:
* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#minimal_action GoogleComputePerInstanceConfig#minimal_action}

---

##### `mostDisruptiveAllowedAction`<sup>Optional</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.mostDisruptiveAllowedAction"></a>

```typescript
public readonly mostDisruptiveAllowedAction: string;
```

- *Type:* string

The most disruptive action to perform on the instance during an update.

Default is 'REPLACE'. Possible values are:
* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#most_disruptive_allowed_action GoogleComputePerInstanceConfig#most_disruptive_allowed_action}

---

##### `preservedState`<sup>Optional</sup> <a name="preservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.preservedState"></a>

```typescript
public readonly preservedState: GoogleComputePerInstanceConfigPreservedState;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a>

preserved_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#preserved_state GoogleComputePerInstanceConfig#preserved_state}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#project GoogleComputePerInstanceConfig#project}.

---

##### `removeInstanceOnDestroy`<sup>Optional</sup> <a name="removeInstanceOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.removeInstanceOnDestroy"></a>

```typescript
public readonly removeInstanceOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, deleting this config will immediately remove the underlying instance.

When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#remove_instance_on_destroy GoogleComputePerInstanceConfig#remove_instance_on_destroy}

---

##### `removeInstanceStateOnDestroy`<sup>Optional</sup> <a name="removeInstanceStateOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.removeInstanceStateOnDestroy"></a>

```typescript
public readonly removeInstanceStateOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, deleting this config will immediately remove any specified state from the underlying instance.

When false, deleting this config will *not* immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#remove_instance_state_on_destroy GoogleComputePerInstanceConfig#remove_instance_state_on_destroy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputePerInstanceConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#timeouts GoogleComputePerInstanceConfig#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#zone GoogleComputePerInstanceConfig#zone}

---

### GoogleComputePerInstanceConfigPreservedState <a name="GoogleComputePerInstanceConfigPreservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputePerInstanceConfigPreservedState: googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.disk">disk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>[]</code> | disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.externalIp">externalIp</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>[]</code> | external_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.internalIp">internalIp</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>[]</code> | internal_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Preserved metadata defined for this instance. This is a list of key->value pairs. |

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.disk"></a>

```typescript
public readonly disk: IResolvable | GoogleComputePerInstanceConfigPreservedStateDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>[]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#disk GoogleComputePerInstanceConfig#disk}

---

##### `externalIp`<sup>Optional</sup> <a name="externalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.externalIp"></a>

```typescript
public readonly externalIp: IResolvable | GoogleComputePerInstanceConfigPreservedStateExternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>[]

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#external_ip GoogleComputePerInstanceConfig#external_ip}

---

##### `internalIp`<sup>Optional</sup> <a name="internalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.internalIp"></a>

```typescript
public readonly internalIp: IResolvable | GoogleComputePerInstanceConfigPreservedStateInternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>[]

internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#internal_ip GoogleComputePerInstanceConfig#internal_ip}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Preserved metadata defined for this instance. This is a list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#metadata GoogleComputePerInstanceConfig#metadata}

---

### GoogleComputePerInstanceConfigPreservedStateDisk <a name="GoogleComputePerInstanceConfigPreservedStateDisk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputePerInstanceConfigPreservedStateDisk: googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.deviceName">deviceName</a></code> | <code>string</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.source">source</a></code> | <code>string</code> | The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.deleteRule">deleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.mode">mode</a></code> | <code>string</code> | The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#device_name GoogleComputePerInstanceConfig#device_name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#source GoogleComputePerInstanceConfig#source}

---

##### `deleteRule`<sup>Optional</sup> <a name="deleteRule" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#delete_rule GoogleComputePerInstanceConfig#delete_rule}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#mode GoogleComputePerInstanceConfig#mode}

---

### GoogleComputePerInstanceConfigPreservedStateExternalIp <a name="GoogleComputePerInstanceConfigPreservedStateExternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputePerInstanceConfigPreservedStateExternalIp: googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.interfaceName">interfaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#interface_name GoogleComputePerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.autoDelete">autoDelete</a></code> | <code>string</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | ip_address block. |

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#interface_name GoogleComputePerInstanceConfig#interface_name}.

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.autoDelete"></a>

```typescript
public readonly autoDelete: string;
```

- *Type:* string

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#auto_delete GoogleComputePerInstanceConfig#auto_delete}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.ipAddress"></a>

```typescript
public readonly ipAddress: GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#ip_address GoogleComputePerInstanceConfig#ip_address}

---

### GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress <a name="GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputePerInstanceConfigPreservedStateExternalIpIpAddress: googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress.property.address">address</a></code> | <code>string</code> | The URL of the reservation for this IP address. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#address GoogleComputePerInstanceConfig#address}

---

### GoogleComputePerInstanceConfigPreservedStateInternalIp <a name="GoogleComputePerInstanceConfigPreservedStateInternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputePerInstanceConfigPreservedStateInternalIp: googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.interfaceName">interfaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#interface_name GoogleComputePerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.autoDelete">autoDelete</a></code> | <code>string</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | ip_address block. |

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#interface_name GoogleComputePerInstanceConfig#interface_name}.

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.autoDelete"></a>

```typescript
public readonly autoDelete: string;
```

- *Type:* string

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#auto_delete GoogleComputePerInstanceConfig#auto_delete}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.ipAddress"></a>

```typescript
public readonly ipAddress: GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#ip_address GoogleComputePerInstanceConfig#ip_address}

---

### GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress <a name="GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputePerInstanceConfigPreservedStateInternalIpIpAddress: googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress.property.address">address</a></code> | <code>string</code> | The URL of the reservation for this IP address. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#address GoogleComputePerInstanceConfig#address}

---

### GoogleComputePerInstanceConfigTimeouts <a name="GoogleComputePerInstanceConfigTimeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

const googleComputePerInstanceConfigTimeouts: googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#create GoogleComputePerInstanceConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#delete GoogleComputePerInstanceConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#update GoogleComputePerInstanceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#create GoogleComputePerInstanceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#delete GoogleComputePerInstanceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_per_instance_config#update GoogleComputePerInstanceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputePerInstanceConfigPreservedStateDiskList <a name="GoogleComputePerInstanceConfigPreservedStateDiskList" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.get"></a>

```typescript
public get(index: number): GoogleComputePerInstanceConfigPreservedStateDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputePerInstanceConfigPreservedStateDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>[]

---


### GoogleComputePerInstanceConfigPreservedStateDiskOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateDiskOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule">resetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteRule` <a name="resetDeleteRule" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule"></a>

```typescript
public resetDeleteRule(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput">deleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule">deleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteRuleInput`<sup>Optional</sup> <a name="deleteRuleInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput"></a>

```typescript
public readonly deleteRuleInput: string;
```

- *Type:* string

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputePerInstanceConfigPreservedStateDisk;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>

---


### GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress">resetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

---


### GoogleComputePerInstanceConfigPreservedStateExternalIpList <a name="GoogleComputePerInstanceConfigPreservedStateExternalIpList" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.get"></a>

```typescript
public get(index: number): GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputePerInstanceConfigPreservedStateExternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>[]

---


### GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress">putIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpAddress` <a name="putIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress"></a>

```typescript
public putIpAddress(value: GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete"></a>

```typescript
public resetAutoDelete(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput">interfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete">autoDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput"></a>

```typescript
public readonly autoDeleteInput: string;
```

- *Type:* string

---

##### `interfaceNameInput`<sup>Optional</sup> <a name="interfaceNameInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput"></a>

```typescript
public readonly interfaceNameInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete"></a>

```typescript
public readonly autoDelete: string;
```

- *Type:* string

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputePerInstanceConfigPreservedStateExternalIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>

---


### GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress">resetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

---


### GoogleComputePerInstanceConfigPreservedStateInternalIpList <a name="GoogleComputePerInstanceConfigPreservedStateInternalIpList" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.get"></a>

```typescript
public get(index: number): GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputePerInstanceConfigPreservedStateInternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>[]

---


### GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress">putIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpAddress` <a name="putIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress"></a>

```typescript
public putIpAddress(value: GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete"></a>

```typescript
public resetAutoDelete(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput">interfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete">autoDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput"></a>

```typescript
public readonly autoDeleteInput: string;
```

- *Type:* string

---

##### `interfaceNameInput`<sup>Optional</sup> <a name="interfaceNameInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput"></a>

```typescript
public readonly interfaceNameInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete"></a>

```typescript
public readonly autoDelete: string;
```

- *Type:* string

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputePerInstanceConfigPreservedStateInternalIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>

---


### GoogleComputePerInstanceConfigPreservedStateOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putExternalIp">putExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putInternalIp">putInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetExternalIp">resetExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetInternalIp">resetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDisk` <a name="putDisk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putDisk"></a>

```typescript
public putDisk(value: IResolvable | GoogleComputePerInstanceConfigPreservedStateDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>[]

---

##### `putExternalIp` <a name="putExternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putExternalIp"></a>

```typescript
public putExternalIp(value: IResolvable | GoogleComputePerInstanceConfigPreservedStateExternalIp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putExternalIp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>[]

---

##### `putInternalIp` <a name="putInternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putInternalIp"></a>

```typescript
public putInternalIp(value: IResolvable | GoogleComputePerInstanceConfigPreservedStateInternalIp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putInternalIp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>[]

---

##### `resetDisk` <a name="resetDisk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetDisk"></a>

```typescript
public resetDisk(): void
```

##### `resetExternalIp` <a name="resetExternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetExternalIp"></a>

```typescript
public resetExternalIp(): void
```

##### `resetInternalIp` <a name="resetInternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetInternalIp"></a>

```typescript
public resetInternalIp(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList">GoogleComputePerInstanceConfigPreservedStateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.externalIp">externalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList">GoogleComputePerInstanceConfigPreservedStateExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalIp">internalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList">GoogleComputePerInstanceConfigPreservedStateInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.diskInput">diskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.externalIpInput">externalIpInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalIpInput">internalIpInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.disk"></a>

```typescript
public readonly disk: GoogleComputePerInstanceConfigPreservedStateDiskList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList">GoogleComputePerInstanceConfigPreservedStateDiskList</a>

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.externalIp"></a>

```typescript
public readonly externalIp: GoogleComputePerInstanceConfigPreservedStateExternalIpList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList">GoogleComputePerInstanceConfigPreservedStateExternalIpList</a>

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalIp"></a>

```typescript
public readonly internalIp: GoogleComputePerInstanceConfigPreservedStateInternalIpList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList">GoogleComputePerInstanceConfigPreservedStateInternalIpList</a>

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.diskInput"></a>

```typescript
public readonly diskInput: IResolvable | GoogleComputePerInstanceConfigPreservedStateDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>[]

---

##### `externalIpInput`<sup>Optional</sup> <a name="externalIpInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.externalIpInput"></a>

```typescript
public readonly externalIpInput: IResolvable | GoogleComputePerInstanceConfigPreservedStateExternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>[]

---

##### `internalIpInput`<sup>Optional</sup> <a name="internalIpInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalIpInput"></a>

```typescript
public readonly internalIpInput: IResolvable | GoogleComputePerInstanceConfigPreservedStateInternalIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>[]

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputePerInstanceConfigPreservedState;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a>

---


### GoogleComputePerInstanceConfigTimeoutsOutputReference <a name="GoogleComputePerInstanceConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputePerInstanceConfig } from '@cdktf/provider-google-beta'

new googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputePerInstanceConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a>

---




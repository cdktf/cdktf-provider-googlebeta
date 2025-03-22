# `googleServiceUsageConsumerQuotaOverride` Submodule <a name="`googleServiceUsageConsumerQuotaOverride` Submodule" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceUsageConsumerQuotaOverride <a name="GoogleServiceUsageConsumerQuotaOverride" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override google_service_usage_consumer_quota_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer"></a>

```typescript
import { googleServiceUsageConsumerQuotaOverride } from '@cdktf/provider-google-beta'

new googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride(scope: Construct, id: string, config: GoogleServiceUsageConsumerQuotaOverrideConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig">GoogleServiceUsageConsumerQuotaOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig">GoogleServiceUsageConsumerQuotaOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleServiceUsageConsumerQuotaOverrideTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetForce` <a name="resetForce" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetForce"></a>

```typescript
public resetForce(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleServiceUsageConsumerQuotaOverride resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isConstruct"></a>

```typescript
import { googleServiceUsageConsumerQuotaOverride } from '@cdktf/provider-google-beta'

googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformElement"></a>

```typescript
import { googleServiceUsageConsumerQuotaOverride } from '@cdktf/provider-google-beta'

googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformResource"></a>

```typescript
import { googleServiceUsageConsumerQuotaOverride } from '@cdktf/provider-google-beta'

googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport"></a>

```typescript
import { googleServiceUsageConsumerQuotaOverride } from '@cdktf/provider-google-beta'

googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleServiceUsageConsumerQuotaOverride resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleServiceUsageConsumerQuotaOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleServiceUsageConsumerQuotaOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleServiceUsageConsumerQuotaOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference">GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensionsInput">dimensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forceInput">forceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limitInput">limitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValueInput">overrideValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.force">force</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limit">limit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValue">overrideValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference">GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forceInput"></a>

```typescript
public readonly forceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limitInput"></a>

```typescript
public readonly limitInput: string;
```

- *Type:* string

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `overrideValueInput`<sup>Optional</sup> <a name="overrideValueInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValueInput"></a>

```typescript
public readonly overrideValueInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleServiceUsageConsumerQuotaOverrideTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `overrideValue`<sup>Required</sup> <a name="overrideValue" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValue"></a>

```typescript
public readonly overrideValue: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceUsageConsumerQuotaOverrideConfig <a name="GoogleServiceUsageConsumerQuotaOverrideConfig" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.Initializer"></a>

```typescript
import { googleServiceUsageConsumerQuotaOverride } from '@cdktf/provider-google-beta'

const googleServiceUsageConsumerQuotaOverrideConfig: googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.limit">limit</a></code> | <code>string</code> | The limit on the metric, e.g. '/project/region'. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.metric">metric</a></code> | <code>string</code> | The metric that should be limited, e.g. 'compute.googleapis.com/cpus'. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.overrideValue">overrideValue</a></code> | <code>string</code> | The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota). |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.service">service</a></code> | <code>string</code> | The service that the metrics belong to, e.g. 'compute.googleapis.com'. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.force">force</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the new quota would decrease the existing quota by more than 10%, the request is rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#id GoogleServiceUsageConsumerQuotaOverride#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#project GoogleServiceUsageConsumerQuotaOverride#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

The limit on the metric, e.g. '/project/region'.

~> Make sure that 'limit' is in a format that doesn't start with '1/' or contain curly braces.
E.g. use '/project/user' instead of '1/{project}/{user}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#limit GoogleServiceUsageConsumerQuotaOverride#limit}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

The metric that should be limited, e.g. 'compute.googleapis.com/cpus'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#metric GoogleServiceUsageConsumerQuotaOverride#metric}

---

##### `overrideValue`<sup>Required</sup> <a name="overrideValue" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.overrideValue"></a>

```typescript
public readonly overrideValue: string;
```

- *Type:* string

The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#override_value GoogleServiceUsageConsumerQuotaOverride#override_value}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The service that the metrics belong to, e.g. 'compute.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#service GoogleServiceUsageConsumerQuotaOverride#service}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#dimensions GoogleServiceUsageConsumerQuotaOverride#dimensions}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the new quota would decrease the existing quota by more than 10%, the request is rejected.

If 'force' is 'true', that safety check is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#force GoogleServiceUsageConsumerQuotaOverride#force}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#id GoogleServiceUsageConsumerQuotaOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#project GoogleServiceUsageConsumerQuotaOverride#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleServiceUsageConsumerQuotaOverrideTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#timeouts GoogleServiceUsageConsumerQuotaOverride#timeouts}

---

### GoogleServiceUsageConsumerQuotaOverrideTimeouts <a name="GoogleServiceUsageConsumerQuotaOverrideTimeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.Initializer"></a>

```typescript
import { googleServiceUsageConsumerQuotaOverride } from '@cdktf/provider-google-beta'

const googleServiceUsageConsumerQuotaOverrideTimeouts: googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#create GoogleServiceUsageConsumerQuotaOverride#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#delete GoogleServiceUsageConsumerQuotaOverride#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#update GoogleServiceUsageConsumerQuotaOverride#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#create GoogleServiceUsageConsumerQuotaOverride#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#delete GoogleServiceUsageConsumerQuotaOverride#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_usage_consumer_quota_override#update GoogleServiceUsageConsumerQuotaOverride#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference <a name="GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleServiceUsageConsumerQuotaOverride } from '@cdktf/provider-google-beta'

new googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleServiceUsageConsumerQuotaOverrideTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

---




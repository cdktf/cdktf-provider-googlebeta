# `googleChronicleDataAccessScope` Submodule <a name="`googleChronicleDataAccessScope` Submodule" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleDataAccessScope <a name="GoogleChronicleDataAccessScope" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope google_chronicle_data_access_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

new googleChronicleDataAccessScope.GoogleChronicleDataAccessScope(scope: Construct, id: string, config: GoogleChronicleDataAccessScopeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig">GoogleChronicleDataAccessScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig">GoogleChronicleDataAccessScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putAllowedDataAccessLabels">putAllowedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putDeniedDataAccessLabels">putDeniedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetAllowAll">resetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetAllowedDataAccessLabels">resetAllowedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetDeniedDataAccessLabels">resetDeniedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedDataAccessLabels` <a name="putAllowedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putAllowedDataAccessLabels"></a>

```typescript
public putAllowedDataAccessLabels(value: IResolvable | GoogleChronicleDataAccessScopeAllowedDataAccessLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putAllowedDataAccessLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>[]

---

##### `putDeniedDataAccessLabels` <a name="putDeniedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putDeniedDataAccessLabels"></a>

```typescript
public putDeniedDataAccessLabels(value: IResolvable | GoogleChronicleDataAccessScopeDeniedDataAccessLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putDeniedDataAccessLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleChronicleDataAccessScopeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a>

---

##### `resetAllowAll` <a name="resetAllowAll" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetAllowAll"></a>

```typescript
public resetAllowAll(): void
```

##### `resetAllowedDataAccessLabels` <a name="resetAllowedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetAllowedDataAccessLabels"></a>

```typescript
public resetAllowedDataAccessLabels(): void
```

##### `resetDeniedDataAccessLabels` <a name="resetDeniedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetDeniedDataAccessLabels"></a>

```typescript
public resetDeniedDataAccessLabels(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleChronicleDataAccessScope resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isConstruct"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformElement"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformResource"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleChronicleDataAccessScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleDataAccessScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleDataAccessScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleChronicleDataAccessScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowedDataAccessLabels">allowedDataAccessLabels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.deniedDataAccessLabels">deniedDataAccessLabels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.lastEditor">lastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference">GoogleChronicleDataAccessScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowAllInput">allowAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowedDataAccessLabelsInput">allowedDataAccessLabelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dataAccessScopeIdInput">dataAccessScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.deniedDataAccessLabelsInput">deniedDataAccessLabelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowAll">allowAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dataAccessScopeId">dataAccessScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedDataAccessLabels`<sup>Required</sup> <a name="allowedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowedDataAccessLabels"></a>

```typescript
public readonly allowedDataAccessLabels: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList</a>

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deniedDataAccessLabels`<sup>Required</sup> <a name="deniedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.deniedDataAccessLabels"></a>

```typescript
public readonly deniedDataAccessLabels: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.lastEditor"></a>

```typescript
public readonly lastEditor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleDataAccessScopeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference">GoogleChronicleDataAccessScopeTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `allowAllInput`<sup>Optional</sup> <a name="allowAllInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowAllInput"></a>

```typescript
public readonly allowAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedDataAccessLabelsInput`<sup>Optional</sup> <a name="allowedDataAccessLabelsInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowedDataAccessLabelsInput"></a>

```typescript
public readonly allowedDataAccessLabelsInput: IResolvable | GoogleChronicleDataAccessScopeAllowedDataAccessLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>[]

---

##### `dataAccessScopeIdInput`<sup>Optional</sup> <a name="dataAccessScopeIdInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dataAccessScopeIdInput"></a>

```typescript
public readonly dataAccessScopeIdInput: string;
```

- *Type:* string

---

##### `deniedDataAccessLabelsInput`<sup>Optional</sup> <a name="deniedDataAccessLabelsInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.deniedDataAccessLabelsInput"></a>

```typescript
public readonly deniedDataAccessLabelsInput: IResolvable | GoogleChronicleDataAccessScopeDeniedDataAccessLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleChronicleDataAccessScopeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a>

---

##### `allowAll`<sup>Required</sup> <a name="allowAll" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowAll"></a>

```typescript
public readonly allowAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataAccessScopeId`<sup>Required</sup> <a name="dataAccessScopeId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dataAccessScopeId"></a>

```typescript
public readonly dataAccessScopeId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleDataAccessScopeAllowedDataAccessLabels <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.Initializer"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

const googleChronicleDataAccessScopeAllowedDataAccessLabels: googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.assetNamespace">assetNamespace</a></code> | <code>string</code> | The asset namespace configured in the forwarder of the customer's events. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.dataAccessLabel">dataAccessLabel</a></code> | <code>string</code> | The name of the data access label. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.ingestionLabel">ingestionLabel</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | ingestion_label block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.logType">logType</a></code> | <code>string</code> | The name of the log type. |

---

##### `assetNamespace`<sup>Optional</sup> <a name="assetNamespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.assetNamespace"></a>

```typescript
public readonly assetNamespace: string;
```

- *Type:* string

The asset namespace configured in the forwarder of the customer's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#asset_namespace GoogleChronicleDataAccessScope#asset_namespace}

---

##### `dataAccessLabel`<sup>Optional</sup> <a name="dataAccessLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.dataAccessLabel"></a>

```typescript
public readonly dataAccessLabel: string;
```

- *Type:* string

The name of the data access label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#data_access_label GoogleChronicleDataAccessScope#data_access_label}

---

##### `ingestionLabel`<sup>Optional</sup> <a name="ingestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.ingestionLabel"></a>

```typescript
public readonly ingestionLabel: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

ingestion_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#ingestion_label GoogleChronicleDataAccessScope#ingestion_label}

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

The name of the log type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#log_type GoogleChronicleDataAccessScope#log_type}

---

### GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.Initializer"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

const googleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel: googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelKey">ingestionLabelKey</a></code> | <code>string</code> | Required. The key of the ingestion label. Always required. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelValue">ingestionLabelValue</a></code> | <code>string</code> | Optional. |

---

##### `ingestionLabelKey`<sup>Required</sup> <a name="ingestionLabelKey" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelKey"></a>

```typescript
public readonly ingestionLabelKey: string;
```

- *Type:* string

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_key GoogleChronicleDataAccessScope#ingestion_label_key}

---

##### `ingestionLabelValue`<sup>Optional</sup> <a name="ingestionLabelValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelValue"></a>

```typescript
public readonly ingestionLabelValue: string;
```

- *Type:* string

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_value GoogleChronicleDataAccessScope#ingestion_label_value}

---

### GoogleChronicleDataAccessScopeConfig <a name="GoogleChronicleDataAccessScopeConfig" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.Initializer"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

const googleChronicleDataAccessScopeConfig: googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.dataAccessScopeId">dataAccessScopeId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.instance">instance</a></code> | <code>string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.allowAll">allowAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.allowedDataAccessLabels">allowedDataAccessLabels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>[]</code> | allowed_data_access_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.deniedDataAccessLabels">deniedDataAccessLabels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>[]</code> | denied_data_access_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.description">description</a></code> | <code>string</code> | Optional. A description of the data access scope for a human reader. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#id GoogleChronicleDataAccessScope#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#project GoogleChronicleDataAccessScope#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataAccessScopeId`<sup>Required</sup> <a name="dataAccessScopeId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.dataAccessScopeId"></a>

```typescript
public readonly dataAccessScopeId: string;
```

- *Type:* string

Required.

The user provided scope id which will become the last part of the name
of the scope resource.
Needs to be compliant with https://google.aip.dev/122

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#data_access_scope_id GoogleChronicleDataAccessScope#data_access_scope_id}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#instance GoogleChronicleDataAccessScope#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#location GoogleChronicleDataAccessScope#location}

---

##### `allowAll`<sup>Optional</sup> <a name="allowAll" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.allowAll"></a>

```typescript
public readonly allowAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

Whether or not the scope allows all labels, allow_all and
allowed_data_access_labels are mutually exclusive and one of them must be
present. denied_data_access_labels can still be used along with allow_all.
When combined with denied_data_access_labels, access will be granted to all
data that doesn't have labels mentioned in denied_data_access_labels. E.g.:
A customer with scope with denied labels A and B and allow_all will be able
to see all data except data labeled with A and data labeled with B and data
with labels A and B.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#allow_all GoogleChronicleDataAccessScope#allow_all}

---

##### `allowedDataAccessLabels`<sup>Optional</sup> <a name="allowedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.allowedDataAccessLabels"></a>

```typescript
public readonly allowedDataAccessLabels: IResolvable | GoogleChronicleDataAccessScopeAllowedDataAccessLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>[]

allowed_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#allowed_data_access_labels GoogleChronicleDataAccessScope#allowed_data_access_labels}

---

##### `deniedDataAccessLabels`<sup>Optional</sup> <a name="deniedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.deniedDataAccessLabels"></a>

```typescript
public readonly deniedDataAccessLabels: IResolvable | GoogleChronicleDataAccessScopeDeniedDataAccessLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>[]

denied_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#denied_data_access_labels GoogleChronicleDataAccessScope#denied_data_access_labels}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. A description of the data access scope for a human reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#description GoogleChronicleDataAccessScope#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#id GoogleChronicleDataAccessScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#project GoogleChronicleDataAccessScope#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleDataAccessScopeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#timeouts GoogleChronicleDataAccessScope#timeouts}

---

### GoogleChronicleDataAccessScopeDeniedDataAccessLabels <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.Initializer"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

const googleChronicleDataAccessScopeDeniedDataAccessLabels: googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.assetNamespace">assetNamespace</a></code> | <code>string</code> | The asset namespace configured in the forwarder of the customer's events. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.dataAccessLabel">dataAccessLabel</a></code> | <code>string</code> | The name of the data access label. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.ingestionLabel">ingestionLabel</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | ingestion_label block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.logType">logType</a></code> | <code>string</code> | The name of the log type. |

---

##### `assetNamespace`<sup>Optional</sup> <a name="assetNamespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.assetNamespace"></a>

```typescript
public readonly assetNamespace: string;
```

- *Type:* string

The asset namespace configured in the forwarder of the customer's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#asset_namespace GoogleChronicleDataAccessScope#asset_namespace}

---

##### `dataAccessLabel`<sup>Optional</sup> <a name="dataAccessLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.dataAccessLabel"></a>

```typescript
public readonly dataAccessLabel: string;
```

- *Type:* string

The name of the data access label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#data_access_label GoogleChronicleDataAccessScope#data_access_label}

---

##### `ingestionLabel`<sup>Optional</sup> <a name="ingestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.ingestionLabel"></a>

```typescript
public readonly ingestionLabel: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

ingestion_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#ingestion_label GoogleChronicleDataAccessScope#ingestion_label}

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

The name of the log type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#log_type GoogleChronicleDataAccessScope#log_type}

---

### GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.Initializer"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

const googleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel: googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelKey">ingestionLabelKey</a></code> | <code>string</code> | Required. The key of the ingestion label. Always required. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelValue">ingestionLabelValue</a></code> | <code>string</code> | Optional. |

---

##### `ingestionLabelKey`<sup>Required</sup> <a name="ingestionLabelKey" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelKey"></a>

```typescript
public readonly ingestionLabelKey: string;
```

- *Type:* string

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_key GoogleChronicleDataAccessScope#ingestion_label_key}

---

##### `ingestionLabelValue`<sup>Optional</sup> <a name="ingestionLabelValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelValue"></a>

```typescript
public readonly ingestionLabelValue: string;
```

- *Type:* string

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_value GoogleChronicleDataAccessScope#ingestion_label_value}

---

### GoogleChronicleDataAccessScopeTimeouts <a name="GoogleChronicleDataAccessScopeTimeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.Initializer"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

const googleChronicleDataAccessScopeTimeouts: googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#create GoogleChronicleDataAccessScope#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#delete GoogleChronicleDataAccessScope#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#update GoogleChronicleDataAccessScope#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#create GoogleChronicleDataAccessScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#delete GoogleChronicleDataAccessScope#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_chronicle_data_access_scope#update GoogleChronicleDataAccessScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

new googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue">resetIngestionLabelValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIngestionLabelValue` <a name="resetIngestionLabelValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue"></a>

```typescript
public resetIngestionLabelValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput">ingestionLabelKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput">ingestionLabelValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey">ingestionLabelKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue">ingestionLabelValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingestionLabelKeyInput`<sup>Optional</sup> <a name="ingestionLabelKeyInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput"></a>

```typescript
public readonly ingestionLabelKeyInput: string;
```

- *Type:* string

---

##### `ingestionLabelValueInput`<sup>Optional</sup> <a name="ingestionLabelValueInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput"></a>

```typescript
public readonly ingestionLabelValueInput: string;
```

- *Type:* string

---

##### `ingestionLabelKey`<sup>Required</sup> <a name="ingestionLabelKey" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey"></a>

```typescript
public readonly ingestionLabelKey: string;
```

- *Type:* string

---

##### `ingestionLabelValue`<sup>Required</sup> <a name="ingestionLabelValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue"></a>

```typescript
public readonly ingestionLabelValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---


### GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

new googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.get"></a>

```typescript
public get(index: number): GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleDataAccessScopeAllowedDataAccessLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>[]

---


### GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

new googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel">putIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetAssetNamespace">resetAssetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetDataAccessLabel">resetDataAccessLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetIngestionLabel">resetIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetLogType">resetLogType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIngestionLabel` <a name="putIngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel"></a>

```typescript
public putIngestionLabel(value: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---

##### `resetAssetNamespace` <a name="resetAssetNamespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetAssetNamespace"></a>

```typescript
public resetAssetNamespace(): void
```

##### `resetDataAccessLabel` <a name="resetDataAccessLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetDataAccessLabel"></a>

```typescript
public resetDataAccessLabel(): void
```

##### `resetIngestionLabel` <a name="resetIngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetIngestionLabel"></a>

```typescript
public resetIngestionLabel(): void
```

##### `resetLogType` <a name="resetLogType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetLogType"></a>

```typescript
public resetLogType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabel">ingestionLabel</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespaceInput">assetNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabelInput">dataAccessLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabelInput">ingestionLabelInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespace">assetNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabel">dataAccessLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `ingestionLabel`<sup>Required</sup> <a name="ingestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabel"></a>

```typescript
public readonly ingestionLabel: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference</a>

---

##### `assetNamespaceInput`<sup>Optional</sup> <a name="assetNamespaceInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespaceInput"></a>

```typescript
public readonly assetNamespaceInput: string;
```

- *Type:* string

---

##### `dataAccessLabelInput`<sup>Optional</sup> <a name="dataAccessLabelInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabelInput"></a>

```typescript
public readonly dataAccessLabelInput: string;
```

- *Type:* string

---

##### `ingestionLabelInput`<sup>Optional</sup> <a name="ingestionLabelInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabelInput"></a>

```typescript
public readonly ingestionLabelInput: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `assetNamespace`<sup>Required</sup> <a name="assetNamespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespace"></a>

```typescript
public readonly assetNamespace: string;
```

- *Type:* string

---

##### `dataAccessLabel`<sup>Required</sup> <a name="dataAccessLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabel"></a>

```typescript
public readonly dataAccessLabel: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleDataAccessScopeAllowedDataAccessLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>

---


### GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

new googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue">resetIngestionLabelValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIngestionLabelValue` <a name="resetIngestionLabelValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue"></a>

```typescript
public resetIngestionLabelValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput">ingestionLabelKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput">ingestionLabelValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey">ingestionLabelKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue">ingestionLabelValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingestionLabelKeyInput`<sup>Optional</sup> <a name="ingestionLabelKeyInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput"></a>

```typescript
public readonly ingestionLabelKeyInput: string;
```

- *Type:* string

---

##### `ingestionLabelValueInput`<sup>Optional</sup> <a name="ingestionLabelValueInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput"></a>

```typescript
public readonly ingestionLabelValueInput: string;
```

- *Type:* string

---

##### `ingestionLabelKey`<sup>Required</sup> <a name="ingestionLabelKey" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey"></a>

```typescript
public readonly ingestionLabelKey: string;
```

- *Type:* string

---

##### `ingestionLabelValue`<sup>Required</sup> <a name="ingestionLabelValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue"></a>

```typescript
public readonly ingestionLabelValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---


### GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

new googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.get"></a>

```typescript
public get(index: number): GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleDataAccessScopeDeniedDataAccessLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>[]

---


### GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

new googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel">putIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetAssetNamespace">resetAssetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetDataAccessLabel">resetDataAccessLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetIngestionLabel">resetIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetLogType">resetLogType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIngestionLabel` <a name="putIngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel"></a>

```typescript
public putIngestionLabel(value: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---

##### `resetAssetNamespace` <a name="resetAssetNamespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetAssetNamespace"></a>

```typescript
public resetAssetNamespace(): void
```

##### `resetDataAccessLabel` <a name="resetDataAccessLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetDataAccessLabel"></a>

```typescript
public resetDataAccessLabel(): void
```

##### `resetIngestionLabel` <a name="resetIngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetIngestionLabel"></a>

```typescript
public resetIngestionLabel(): void
```

##### `resetLogType` <a name="resetLogType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetLogType"></a>

```typescript
public resetLogType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabel">ingestionLabel</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespaceInput">assetNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabelInput">dataAccessLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabelInput">ingestionLabelInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespace">assetNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabel">dataAccessLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `ingestionLabel`<sup>Required</sup> <a name="ingestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabel"></a>

```typescript
public readonly ingestionLabel: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference</a>

---

##### `assetNamespaceInput`<sup>Optional</sup> <a name="assetNamespaceInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespaceInput"></a>

```typescript
public readonly assetNamespaceInput: string;
```

- *Type:* string

---

##### `dataAccessLabelInput`<sup>Optional</sup> <a name="dataAccessLabelInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabelInput"></a>

```typescript
public readonly dataAccessLabelInput: string;
```

- *Type:* string

---

##### `ingestionLabelInput`<sup>Optional</sup> <a name="ingestionLabelInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabelInput"></a>

```typescript
public readonly ingestionLabelInput: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `assetNamespace`<sup>Required</sup> <a name="assetNamespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespace"></a>

```typescript
public readonly assetNamespace: string;
```

- *Type:* string

---

##### `dataAccessLabel`<sup>Required</sup> <a name="dataAccessLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabel"></a>

```typescript
public readonly dataAccessLabel: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleDataAccessScopeDeniedDataAccessLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>

---


### GoogleChronicleDataAccessScopeTimeoutsOutputReference <a name="GoogleChronicleDataAccessScopeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleChronicleDataAccessScope } from '@cdktf/provider-google-beta'

new googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleDataAccessScopeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a>

---




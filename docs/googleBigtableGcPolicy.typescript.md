# `googleBigtableGcPolicy` Submodule <a name="`googleBigtableGcPolicy` Submodule" id="@cdktf/provider-google-beta.googleBigtableGcPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableGcPolicy <a name="GoogleBigtableGcPolicy" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy google_bigtable_gc_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer"></a>

```typescript
import { googleBigtableGcPolicy } from '@cdktf/provider-google-beta'

new googleBigtableGcPolicy.GoogleBigtableGcPolicy(scope: Construct, id: string, config: GoogleBigtableGcPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig">GoogleBigtableGcPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig">GoogleBigtableGcPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxAge">putMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxVersion">putMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetGcRules">resetGcRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetIgnoreWarnings">resetIgnoreWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMaxAge">resetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMaxVersion">resetMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaxAge` <a name="putMaxAge" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxAge"></a>

```typescript
public putMaxAge(value: GoogleBigtableGcPolicyMaxAge): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxAge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a>

---

##### `putMaxVersion` <a name="putMaxVersion" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxVersion"></a>

```typescript
public putMaxVersion(value: IResolvable | GoogleBigtableGcPolicyMaxVersion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxVersion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigtableGcPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetGcRules` <a name="resetGcRules" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetGcRules"></a>

```typescript
public resetGcRules(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreWarnings` <a name="resetIgnoreWarnings" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetIgnoreWarnings"></a>

```typescript
public resetIgnoreWarnings(): void
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMaxAge"></a>

```typescript
public resetMaxAge(): void
```

##### `resetMaxVersion` <a name="resetMaxVersion" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMaxVersion"></a>

```typescript
public resetMaxVersion(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigtableGcPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isConstruct"></a>

```typescript
import { googleBigtableGcPolicy } from '@cdktf/provider-google-beta'

googleBigtableGcPolicy.GoogleBigtableGcPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformElement"></a>

```typescript
import { googleBigtableGcPolicy } from '@cdktf/provider-google-beta'

googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformResource"></a>

```typescript
import { googleBigtableGcPolicy } from '@cdktf/provider-google-beta'

googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport"></a>

```typescript
import { googleBigtableGcPolicy } from '@cdktf/provider-google-beta'

googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBigtableGcPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigtableGcPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigtableGcPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigtableGcPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxAge">maxAge</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference">GoogleBigtableGcPolicyMaxAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxVersion">maxVersion</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList">GoogleBigtableGcPolicyMaxVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference">GoogleBigtableGcPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.columnFamilyInput">columnFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.gcRulesInput">gcRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.ignoreWarningsInput">ignoreWarningsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.instanceNameInput">instanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxAgeInput">maxAgeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxVersionInput">maxVersionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.columnFamily">columnFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.gcRules">gcRules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.ignoreWarnings">ignoreWarnings</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.instanceName">instanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.table">table</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxAge"></a>

```typescript
public readonly maxAge: GoogleBigtableGcPolicyMaxAgeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference">GoogleBigtableGcPolicyMaxAgeOutputReference</a>

---

##### `maxVersion`<sup>Required</sup> <a name="maxVersion" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxVersion"></a>

```typescript
public readonly maxVersion: GoogleBigtableGcPolicyMaxVersionList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList">GoogleBigtableGcPolicyMaxVersionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigtableGcPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference">GoogleBigtableGcPolicyTimeoutsOutputReference</a>

---

##### `columnFamilyInput`<sup>Optional</sup> <a name="columnFamilyInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.columnFamilyInput"></a>

```typescript
public readonly columnFamilyInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `gcRulesInput`<sup>Optional</sup> <a name="gcRulesInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.gcRulesInput"></a>

```typescript
public readonly gcRulesInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreWarningsInput`<sup>Optional</sup> <a name="ignoreWarningsInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.ignoreWarningsInput"></a>

```typescript
public readonly ignoreWarningsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.instanceNameInput"></a>

```typescript
public readonly instanceNameInput: string;
```

- *Type:* string

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxAgeInput"></a>

```typescript
public readonly maxAgeInput: GoogleBigtableGcPolicyMaxAge;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a>

---

##### `maxVersionInput`<sup>Optional</sup> <a name="maxVersionInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxVersionInput"></a>

```typescript
public readonly maxVersionInput: IResolvable | GoogleBigtableGcPolicyMaxVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>[]

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigtableGcPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>

---

##### `columnFamily`<sup>Required</sup> <a name="columnFamily" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.columnFamily"></a>

```typescript
public readonly columnFamily: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `gcRules`<sup>Required</sup> <a name="gcRules" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.gcRules"></a>

```typescript
public readonly gcRules: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreWarnings`<sup>Required</sup> <a name="ignoreWarnings" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.ignoreWarnings"></a>

```typescript
public readonly ignoreWarnings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableGcPolicyConfig <a name="GoogleBigtableGcPolicyConfig" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.Initializer"></a>

```typescript
import { googleBigtableGcPolicy } from '@cdktf/provider-google-beta'

const googleBigtableGcPolicyConfig: googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.columnFamily">columnFamily</a></code> | <code>string</code> | The name of the column family. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.instanceName">instanceName</a></code> | <code>string</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.table">table</a></code> | <code>string</code> | The name of the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | The deletion policy for the GC policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.gcRules">gcRules</a></code> | <code>string</code> | Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#id GoogleBigtableGcPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.ignoreWarnings">ignoreWarnings</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows ignoring warnings when updating the GC policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.maxAge">maxAge</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a></code> | max_age block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.maxVersion">maxVersion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>[]</code> | max_version block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.mode">mode</a></code> | <code>string</code> | NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `columnFamily`<sup>Required</sup> <a name="columnFamily" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.columnFamily"></a>

```typescript
public readonly columnFamily: string;
```

- *Type:* string

The name of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#column_family GoogleBigtableGcPolicy#column_family}

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#instance_name GoogleBigtableGcPolicy#instance_name}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#table GoogleBigtableGcPolicy#table}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

The deletion policy for the GC policy.

Setting ABANDON allows the resource
				to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted
				in a replicated instance. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#deletion_policy GoogleBigtableGcPolicy#deletion_policy}

---

##### `gcRules`<sup>Optional</sup> <a name="gcRules" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.gcRules"></a>

```typescript
public readonly gcRules: string;
```

- *Type:* string

Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#gc_rules GoogleBigtableGcPolicy#gc_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#id GoogleBigtableGcPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreWarnings`<sup>Optional</sup> <a name="ignoreWarnings" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.ignoreWarnings"></a>

```typescript
public readonly ignoreWarnings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows ignoring warnings when updating the GC policy.

This can be used
				to increase the gc policy on replicated clusters. Doing this may make clusters be
				inconsistent for a longer period of time, before using this make sure you understand
				the risks listed at https://cloud.google.com/bigtable/docs/garbage-collection#increasing

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#ignore_warnings GoogleBigtableGcPolicy#ignore_warnings}

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.maxAge"></a>

```typescript
public readonly maxAge: GoogleBigtableGcPolicyMaxAge;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a>

max_age block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#max_age GoogleBigtableGcPolicy#max_age}

---

##### `maxVersion`<sup>Optional</sup> <a name="maxVersion" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.maxVersion"></a>

```typescript
public readonly maxVersion: IResolvable | GoogleBigtableGcPolicyMaxVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>[]

max_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#max_version GoogleBigtableGcPolicy#max_version}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources.

This field may be deprecated in the future. If multiple policies are set, you should choose between UNION OR INTERSECTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#mode GoogleBigtableGcPolicy#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#project GoogleBigtableGcPolicy#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigtableGcPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#timeouts GoogleBigtableGcPolicy#timeouts}

---

### GoogleBigtableGcPolicyMaxAge <a name="GoogleBigtableGcPolicyMaxAge" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.Initializer"></a>

```typescript
import { googleBigtableGcPolicy } from '@cdktf/provider-google-beta'

const googleBigtableGcPolicyMaxAge: googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.property.days">days</a></code> | <code>number</code> | Number of days before applying GC policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.property.duration">duration</a></code> | <code>string</code> | Duration before applying GC policy. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Number of days before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#days GoogleBigtableGcPolicy#days}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Duration before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#duration GoogleBigtableGcPolicy#duration}

---

### GoogleBigtableGcPolicyMaxVersion <a name="GoogleBigtableGcPolicyMaxVersion" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion.Initializer"></a>

```typescript
import { googleBigtableGcPolicy } from '@cdktf/provider-google-beta'

const googleBigtableGcPolicyMaxVersion: googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion.property.number">number</a></code> | <code>number</code> | Number of version before applying the GC policy. |

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

Number of version before applying the GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#number GoogleBigtableGcPolicy#number}

---

### GoogleBigtableGcPolicyTimeouts <a name="GoogleBigtableGcPolicyTimeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.Initializer"></a>

```typescript
import { googleBigtableGcPolicy } from '@cdktf/provider-google-beta'

const googleBigtableGcPolicyTimeouts: googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#create GoogleBigtableGcPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#delete GoogleBigtableGcPolicy#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#create GoogleBigtableGcPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigtable_gc_policy#delete GoogleBigtableGcPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableGcPolicyMaxAgeOutputReference <a name="GoogleBigtableGcPolicyMaxAgeOutputReference" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer"></a>

```typescript
import { googleBigtableGcPolicy } from '@cdktf/provider-google-beta'

new googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resetDuration">resetDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigtableGcPolicyMaxAge;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a>

---


### GoogleBigtableGcPolicyMaxVersionList <a name="GoogleBigtableGcPolicyMaxVersionList" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer"></a>

```typescript
import { googleBigtableGcPolicy } from '@cdktf/provider-google-beta'

new googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.get"></a>

```typescript
public get(index: number): GoogleBigtableGcPolicyMaxVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigtableGcPolicyMaxVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>[]

---


### GoogleBigtableGcPolicyMaxVersionOutputReference <a name="GoogleBigtableGcPolicyMaxVersionOutputReference" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer"></a>

```typescript
import { googleBigtableGcPolicy } from '@cdktf/provider-google-beta'

new googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.numberInput">numberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.number">number</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.numberInput"></a>

```typescript
public readonly numberInput: number;
```

- *Type:* number

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigtableGcPolicyMaxVersion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>

---


### GoogleBigtableGcPolicyTimeoutsOutputReference <a name="GoogleBigtableGcPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigtableGcPolicy } from '@cdktf/provider-google-beta'

new googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigtableGcPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>

---




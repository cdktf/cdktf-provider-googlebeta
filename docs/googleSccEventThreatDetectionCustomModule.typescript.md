# `googleSccEventThreatDetectionCustomModule` Submodule <a name="`googleSccEventThreatDetectionCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccEventThreatDetectionCustomModule <a name="GoogleSccEventThreatDetectionCustomModule" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module google_scc_event_threat_detection_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktf/provider-google-beta'

new googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule(scope: Construct, id: string, config: GoogleSccEventThreatDetectionCustomModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig">GoogleSccEventThreatDetectionCustomModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig">GoogleSccEventThreatDetectionCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSccEventThreatDetectionCustomModuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktf/provider-google-beta'

googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktf/provider-google-beta'

googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktf/provider-google-beta'

googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktf/provider-google-beta'

googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleSccEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSccEventThreatDetectionCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSccEventThreatDetectionCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccEventThreatDetectionCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lastEditor">lastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.configInput">configInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.config">config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementState">enablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lastEditor"></a>

```typescript
public readonly lastEditor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.configInput"></a>

```typescript
public readonly configInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementStateInput"></a>

```typescript
public readonly enablementStateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSccEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccEventThreatDetectionCustomModuleConfig <a name="GoogleSccEventThreatDetectionCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.Initializer"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktf/provider-google-beta'

const googleSccEventThreatDetectionCustomModuleConfig: googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.config">config</a></code> | <code>string</code> | Config for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>string</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.organization">organization</a></code> | <code>string</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.type">type</a></code> | <code>string</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.displayName">displayName</a></code> | <code>string</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#id GoogleSccEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#config GoogleSccEventThreatDetectionCustomModule#config}

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#enablement_state GoogleSccEventThreatDetectionCustomModule#enablement_state}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#organization GoogleSccEventThreatDetectionCustomModule#organization}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#type GoogleSccEventThreatDetectionCustomModule#type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#display_name GoogleSccEventThreatDetectionCustomModule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#id GoogleSccEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSccEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#timeouts GoogleSccEventThreatDetectionCustomModule#timeouts}

---

### GoogleSccEventThreatDetectionCustomModuleTimeouts <a name="GoogleSccEventThreatDetectionCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.Initializer"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktf/provider-google-beta'

const googleSccEventThreatDetectionCustomModuleTimeouts: googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#create GoogleSccEventThreatDetectionCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#delete GoogleSccEventThreatDetectionCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#update GoogleSccEventThreatDetectionCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#create GoogleSccEventThreatDetectionCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#delete GoogleSccEventThreatDetectionCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#update GoogleSccEventThreatDetectionCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference <a name="GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktf/provider-google-beta'

new googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSccEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

---




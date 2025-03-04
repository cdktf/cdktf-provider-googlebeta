# `googleBinaryAuthorizationPolicy` Submodule <a name="`googleBinaryAuthorizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBinaryAuthorizationPolicy <a name="GoogleBinaryAuthorizationPolicy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy google_binary_authorization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

new googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy(scope: Construct, id: string, config: GoogleBinaryAuthorizationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig">GoogleBinaryAuthorizationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig">GoogleBinaryAuthorizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putAdmissionWhitelistPatterns">putAdmissionWhitelistPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putClusterAdmissionRules">putClusterAdmissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putDefaultAdmissionRule">putDefaultAdmissionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetAdmissionWhitelistPatterns">resetAdmissionWhitelistPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetClusterAdmissionRules">resetClusterAdmissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetGlobalPolicyEvaluationMode">resetGlobalPolicyEvaluationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdmissionWhitelistPatterns` <a name="putAdmissionWhitelistPatterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putAdmissionWhitelistPatterns"></a>

```typescript
public putAdmissionWhitelistPatterns(value: IResolvable | GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putAdmissionWhitelistPatterns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>[]

---

##### `putClusterAdmissionRules` <a name="putClusterAdmissionRules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putClusterAdmissionRules"></a>

```typescript
public putClusterAdmissionRules(value: IResolvable | GoogleBinaryAuthorizationPolicyClusterAdmissionRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putClusterAdmissionRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>[]

---

##### `putDefaultAdmissionRule` <a name="putDefaultAdmissionRule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putDefaultAdmissionRule"></a>

```typescript
public putDefaultAdmissionRule(value: GoogleBinaryAuthorizationPolicyDefaultAdmissionRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putDefaultAdmissionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBinaryAuthorizationPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a>

---

##### `resetAdmissionWhitelistPatterns` <a name="resetAdmissionWhitelistPatterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetAdmissionWhitelistPatterns"></a>

```typescript
public resetAdmissionWhitelistPatterns(): void
```

##### `resetClusterAdmissionRules` <a name="resetClusterAdmissionRules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetClusterAdmissionRules"></a>

```typescript
public resetClusterAdmissionRules(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGlobalPolicyEvaluationMode` <a name="resetGlobalPolicyEvaluationMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetGlobalPolicyEvaluationMode"></a>

```typescript
public resetGlobalPolicyEvaluationMode(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBinaryAuthorizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isConstruct"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformElement"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformResource"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBinaryAuthorizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBinaryAuthorizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBinaryAuthorizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBinaryAuthorizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.admissionWhitelistPatterns">admissionWhitelistPatterns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.clusterAdmissionRules">clusterAdmissionRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList">GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.defaultAdmissionRule">defaultAdmissionRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference">GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference">GoogleBinaryAuthorizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.admissionWhitelistPatternsInput">admissionWhitelistPatternsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.clusterAdmissionRulesInput">clusterAdmissionRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.defaultAdmissionRuleInput">defaultAdmissionRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.globalPolicyEvaluationModeInput">globalPolicyEvaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.globalPolicyEvaluationMode">globalPolicyEvaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `admissionWhitelistPatterns`<sup>Required</sup> <a name="admissionWhitelistPatterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.admissionWhitelistPatterns"></a>

```typescript
public readonly admissionWhitelistPatterns: GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList</a>

---

##### `clusterAdmissionRules`<sup>Required</sup> <a name="clusterAdmissionRules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.clusterAdmissionRules"></a>

```typescript
public readonly clusterAdmissionRules: GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList">GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList</a>

---

##### `defaultAdmissionRule`<sup>Required</sup> <a name="defaultAdmissionRule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.defaultAdmissionRule"></a>

```typescript
public readonly defaultAdmissionRule: GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference">GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBinaryAuthorizationPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference">GoogleBinaryAuthorizationPolicyTimeoutsOutputReference</a>

---

##### `admissionWhitelistPatternsInput`<sup>Optional</sup> <a name="admissionWhitelistPatternsInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.admissionWhitelistPatternsInput"></a>

```typescript
public readonly admissionWhitelistPatternsInput: IResolvable | GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>[]

---

##### `clusterAdmissionRulesInput`<sup>Optional</sup> <a name="clusterAdmissionRulesInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.clusterAdmissionRulesInput"></a>

```typescript
public readonly clusterAdmissionRulesInput: IResolvable | GoogleBinaryAuthorizationPolicyClusterAdmissionRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>[]

---

##### `defaultAdmissionRuleInput`<sup>Optional</sup> <a name="defaultAdmissionRuleInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.defaultAdmissionRuleInput"></a>

```typescript
public readonly defaultAdmissionRuleInput: GoogleBinaryAuthorizationPolicyDefaultAdmissionRule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `globalPolicyEvaluationModeInput`<sup>Optional</sup> <a name="globalPolicyEvaluationModeInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.globalPolicyEvaluationModeInput"></a>

```typescript
public readonly globalPolicyEvaluationModeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBinaryAuthorizationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `globalPolicyEvaluationMode`<sup>Required</sup> <a name="globalPolicyEvaluationMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.globalPolicyEvaluationMode"></a>

```typescript
public readonly globalPolicyEvaluationMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns <a name="GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns.Initializer"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

const googleBinaryAuthorizationPolicyAdmissionWhitelistPatterns: googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns.property.namePattern">namePattern</a></code> | <code>string</code> | An image name pattern to whitelist, in the form 'registry/path/to/image'. |

---

##### `namePattern`<sup>Required</sup> <a name="namePattern" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns.property.namePattern"></a>

```typescript
public readonly namePattern: string;
```

- *Type:* string

An image name pattern to whitelist, in the form 'registry/path/to/image'.

This supports a trailing * as a
wildcard, but this is allowed only in text after the registry/
part.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#name_pattern GoogleBinaryAuthorizationPolicy#name_pattern}

---

### GoogleBinaryAuthorizationPolicyClusterAdmissionRules <a name="GoogleBinaryAuthorizationPolicyClusterAdmissionRules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.Initializer"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

const googleBinaryAuthorizationPolicyClusterAdmissionRules: googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.cluster">cluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#cluster GoogleBinaryAuthorizationPolicy#cluster}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.requireAttestationsBy">requireAttestationsBy</a></code> | <code>string[]</code> | The resource names of the attestors that must attest to a container image. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#cluster GoogleBinaryAuthorizationPolicy#cluster}.

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#enforcement_mode GoogleBinaryAuthorizationPolicy#enforcement_mode}

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#evaluation_mode GoogleBinaryAuthorizationPolicy#evaluation_mode}

---

##### `requireAttestationsBy`<sup>Optional</sup> <a name="requireAttestationsBy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules.property.requireAttestationsBy"></a>

```typescript
public readonly requireAttestationsBy: string[];
```

- *Type:* string[]

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#require_attestations_by GoogleBinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleBinaryAuthorizationPolicyConfig <a name="GoogleBinaryAuthorizationPolicyConfig" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.Initializer"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

const googleBinaryAuthorizationPolicyConfig: googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.defaultAdmissionRule">defaultAdmissionRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | default_admission_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.admissionWhitelistPatterns">admissionWhitelistPatterns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>[]</code> | admission_whitelist_patterns block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.clusterAdmissionRules">clusterAdmissionRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>[]</code> | cluster_admission_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.description">description</a></code> | <code>string</code> | A descriptive comment. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.globalPolicyEvaluationMode">globalPolicyEvaluationMode</a></code> | <code>string</code> | Controls the evaluation of a Google-maintained global admission policy for common system-level images. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#id GoogleBinaryAuthorizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#project GoogleBinaryAuthorizationPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultAdmissionRule`<sup>Required</sup> <a name="defaultAdmissionRule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.defaultAdmissionRule"></a>

```typescript
public readonly defaultAdmissionRule: GoogleBinaryAuthorizationPolicyDefaultAdmissionRule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a>

default_admission_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#default_admission_rule GoogleBinaryAuthorizationPolicy#default_admission_rule}

---

##### `admissionWhitelistPatterns`<sup>Optional</sup> <a name="admissionWhitelistPatterns" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.admissionWhitelistPatterns"></a>

```typescript
public readonly admissionWhitelistPatterns: IResolvable | GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>[]

admission_whitelist_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#admission_whitelist_patterns GoogleBinaryAuthorizationPolicy#admission_whitelist_patterns}

---

##### `clusterAdmissionRules`<sup>Optional</sup> <a name="clusterAdmissionRules" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.clusterAdmissionRules"></a>

```typescript
public readonly clusterAdmissionRules: IResolvable | GoogleBinaryAuthorizationPolicyClusterAdmissionRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>[]

cluster_admission_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#cluster_admission_rules GoogleBinaryAuthorizationPolicy#cluster_admission_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A descriptive comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#description GoogleBinaryAuthorizationPolicy#description}

---

##### `globalPolicyEvaluationMode`<sup>Optional</sup> <a name="globalPolicyEvaluationMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.globalPolicyEvaluationMode"></a>

```typescript
public readonly globalPolicyEvaluationMode: string;
```

- *Type:* string

Controls the evaluation of a Google-maintained global admission policy for common system-level images.

Images not covered by the global
policy will be subject to the project admission policy. Possible values: ["ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#global_policy_evaluation_mode GoogleBinaryAuthorizationPolicy#global_policy_evaluation_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#id GoogleBinaryAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#project GoogleBinaryAuthorizationPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBinaryAuthorizationPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#timeouts GoogleBinaryAuthorizationPolicy#timeouts}

---

### GoogleBinaryAuthorizationPolicyDefaultAdmissionRule <a name="GoogleBinaryAuthorizationPolicyDefaultAdmissionRule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.Initializer"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

const googleBinaryAuthorizationPolicyDefaultAdmissionRule: googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.requireAttestationsBy">requireAttestationsBy</a></code> | <code>string[]</code> | The resource names of the attestors that must attest to a container image. |

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#enforcement_mode GoogleBinaryAuthorizationPolicy#enforcement_mode}

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#evaluation_mode GoogleBinaryAuthorizationPolicy#evaluation_mode}

---

##### `requireAttestationsBy`<sup>Optional</sup> <a name="requireAttestationsBy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule.property.requireAttestationsBy"></a>

```typescript
public readonly requireAttestationsBy: string[];
```

- *Type:* string[]

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#require_attestations_by GoogleBinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleBinaryAuthorizationPolicyTimeouts <a name="GoogleBinaryAuthorizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.Initializer"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

const googleBinaryAuthorizationPolicyTimeouts: googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#create GoogleBinaryAuthorizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#delete GoogleBinaryAuthorizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#update GoogleBinaryAuthorizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#create GoogleBinaryAuthorizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#delete GoogleBinaryAuthorizationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_binary_authorization_policy#update GoogleBinaryAuthorizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList <a name="GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

new googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get"></a>

```typescript
public get(index: number): GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>[]

---


### GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference <a name="GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

new googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePatternInput">namePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePattern">namePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namePatternInput`<sup>Optional</sup> <a name="namePatternInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePatternInput"></a>

```typescript
public readonly namePatternInput: string;
```

- *Type:* string

---

##### `namePattern`<sup>Required</sup> <a name="namePattern" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePattern"></a>

```typescript
public readonly namePattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns">GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>

---


### GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList <a name="GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

new googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.get"></a>

```typescript
public get(index: number): GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBinaryAuthorizationPolicyClusterAdmissionRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>[]

---


### GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference <a name="GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

new googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resetRequireAttestationsBy">resetRequireAttestationsBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequireAttestationsBy` <a name="resetRequireAttestationsBy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resetRequireAttestationsBy"></a>

```typescript
public resetRequireAttestationsBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementModeInput">enforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationModeInput">evaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsByInput">requireAttestationsByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsBy">requireAttestationsBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `enforcementModeInput`<sup>Optional</sup> <a name="enforcementModeInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementModeInput"></a>

```typescript
public readonly enforcementModeInput: string;
```

- *Type:* string

---

##### `evaluationModeInput`<sup>Optional</sup> <a name="evaluationModeInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationModeInput"></a>

```typescript
public readonly evaluationModeInput: string;
```

- *Type:* string

---

##### `requireAttestationsByInput`<sup>Optional</sup> <a name="requireAttestationsByInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsByInput"></a>

```typescript
public readonly requireAttestationsByInput: string[];
```

- *Type:* string[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

---

##### `requireAttestationsBy`<sup>Required</sup> <a name="requireAttestationsBy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsBy"></a>

```typescript
public readonly requireAttestationsBy: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBinaryAuthorizationPolicyClusterAdmissionRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyClusterAdmissionRules">GoogleBinaryAuthorizationPolicyClusterAdmissionRules</a>

---


### GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference <a name="GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

new googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resetRequireAttestationsBy">resetRequireAttestationsBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequireAttestationsBy` <a name="resetRequireAttestationsBy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resetRequireAttestationsBy"></a>

```typescript
public resetRequireAttestationsBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementModeInput">enforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationModeInput">evaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsByInput">requireAttestationsByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsBy">requireAttestationsBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforcementModeInput`<sup>Optional</sup> <a name="enforcementModeInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementModeInput"></a>

```typescript
public readonly enforcementModeInput: string;
```

- *Type:* string

---

##### `evaluationModeInput`<sup>Optional</sup> <a name="evaluationModeInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationModeInput"></a>

```typescript
public readonly evaluationModeInput: string;
```

- *Type:* string

---

##### `requireAttestationsByInput`<sup>Optional</sup> <a name="requireAttestationsByInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsByInput"></a>

```typescript
public readonly requireAttestationsByInput: string[];
```

- *Type:* string[]

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

---

##### `requireAttestationsBy`<sup>Required</sup> <a name="requireAttestationsBy" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsBy"></a>

```typescript
public readonly requireAttestationsBy: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBinaryAuthorizationPolicyDefaultAdmissionRule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyDefaultAdmissionRule">GoogleBinaryAuthorizationPolicyDefaultAdmissionRule</a>

---


### GoogleBinaryAuthorizationPolicyTimeoutsOutputReference <a name="GoogleBinaryAuthorizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBinaryAuthorizationPolicy } from '@cdktf/provider-google-beta'

new googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBinaryAuthorizationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationPolicy.GoogleBinaryAuthorizationPolicyTimeouts">GoogleBinaryAuthorizationPolicyTimeouts</a>

---



